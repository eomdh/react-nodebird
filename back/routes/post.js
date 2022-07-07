const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Post, User, Comment, Image, Hashtag } = require('../models');
const { isLoggedIn } = require('./middlewares');

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {   // (ex: image.png)             
      const ext = path.extname(file.originalname);  // 확장자 추출 (.png)
      const basename = path.basename(file.originalname, ext);   // (image)
      done(null, basename + '_' + new Date().getTime() + ext); // image202207071212.png
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB (파일 사이즈 제한)
});

router.post('/', isLoggedIn, upload.none(), async (req, res) => {  // POST /post
  try {
    const hashtags = req.body.content.match(/#[^\s#]+/g);
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id,
    });
    if (hashtags) {
      const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({  // 없을 때만 등록
        where: {name: tag.slice(1).toLowerCase() },
      }))); // ex) result = [[노드], true], [리액트, true]]
      await post.addHashtags(result.map((v => v[0])));
    };
    if (req.body.image) {
      if (Array.isArray(req.body.image)) {  // 여러 개 : [img1.png, img2.png]
        const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
        await post.addImages(images);
      } else {  // 한 개 : img.png
        const image = await Image.create({ src: req.body.image });
        await post.addImages(image);
      }
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: User,    // 게시글 작성자
        attributes: ['id', 'nickname'],
      }, {
        model: Comment,
        include: [{
          model: User,  // 댓글 작성자
          attributes: ['id', 'nickname'],
        }]
      }, {
        model: Image,
      }, {
        model: User,    // 좋아요 누른사람
        as: 'Likers',
        attributes: ['id'],
      }]
    })
    res.status(201).json(fullPost);
  } catch (error) {
    console.error (error);
    next(error);
  }
});

router.delete('/:postId', isLoggedIn, async (req, res, next) => {    // DELETE /post/1
  try {
    await Post.destroy({
      where: { 
        id: req.params.postId,
        UserId: req.user.id,
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/images', isLoggedIn, upload.array('image'), (req, res, next) => {  // POST /post/images
  console.log(req.files);
  res.json(req.files.map((v) => v.filename));
});

router.post('/:postId/comment', isLoggedIn, async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId }
    });
    if(!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.');
    };
    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId),
      UserId: req.user.id,
    })
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }],
    })
    res.status(201).json(fullComment);
  } catch (error) {
    console.error (error);
    next(error);
  }
});

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => {   // PATCH /post/1/like
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId }
    })
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.');
    }
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error)
    next(error);
  }
});

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => {  // DELETE /post/1/like
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId }
    })
    if (!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.');
    }
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error)
    next(error);
  }
});

module.exports = router;
