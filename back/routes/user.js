const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { Op } = require('sequelize');
const { User, Post, Comment, Image } = require('../models'); // 구조분해할당
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

router.get('/', async (req, res, next) => {   // GET /user/ 
  console.log(req.headers);
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where:  { id: req.user.id },
        attributes: {
          exclude: ['password']   // 전체 데이터에서 password만 제외
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      res.status(200).json(fullUserWithoutPassword);
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/followers', isLoggedIn, async (req, res, next) => {   // GET /user/followers
  try {
    const user = await User.findOne({
      where: { id: req.user.id }
    });
    if (!user) {
      return res.status(403).send('존재하지 않는 사용자입니다.');
    }
    const followers = await user.getFollowers({
      limit: parseInt(req.query.limit, 10),
    });
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/followings', isLoggedIn, async (req, res, next) => {   // GET /user/followings
  try {
    const user = await User.findOne({
      where: { id: req.user.id }
    });
    if (!user) {
      return res.status(403).send('존재하지 않는 사용자입니다.');
    }
    const followings = await user.getFollowings({
      limit: parseInt(req.query.limit, 10),
    });
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/:id', async (req, res, next) => { // GET /user/3
  try {
    const fullUserWithoutPassword = await User.findOne({
      where: { id: req.params.id },
      attributes: {
        exclude: ['password']
      },
      include: [{
        model: Post,
        attributes: ['id'],
      }, {
        model: User,
        as: 'Followings',
        attributes: ['id'],
      }, {
        model: User,
        as: 'Followers',
        attributes: ['id'],
      }]
    })
    if (fullUserWithoutPassword) {
      const data = fullUserWithoutPassword.toJSON();
      data.Posts = data.Posts.length;
      data.Followings = data.Followings.length;
      data.Followers = data.Followers.length;
      res.status(200).json(data);
    } else {
      res.status(404).json('존재하지 않는 사용자입니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/:id/posts', async (req, res, next) => { // GET /user/1/posts
  try {
    const user = await User.findOne({ where: { id: req.params.id }});
    if (user) {
      const where = {};
      if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
        where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
      } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
      const posts = await user.getPosts({
        where,
        limit: 10,
        include: [{
          model: Image,
        }, {
          model: Comment,
          include: [{
            model: User,
            attributes: ['id', 'nickname'],
          }]
        }, {
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: User,
          through: 'Like',
          as: 'Likers',
          attributes: ['id'],
        }, {
          model: Post,
          as: 'Retweet',
          include: [{
            model: User,
            attributes: ['id', 'nickname'],
          }, {
            model: Image,
          }]
        }],
      });
      console.log(posts);
      res.status(200).json(posts);
    } else {
      res.status(404).send('존재하지 않는 사용자입니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/', isNotLoggedIn, async (req, res, next) => {  // POST /user/
  try {
    const usedEmail = await User.findOne({    // 중복 email 검사
      where: {
        email : req.body.email,
      }
    });
    if (usedEmail) { 
      return res.status(403).send('이미 사용중인 이메일입니다.'); // saga의 err.response.data로
    }
    const usedNickname = await User.findOne({ // 중복 nickname 검사
      where: {
        nickname : req.body.nickname,
      }
    });
    if (usedNickname) { 
      return res.status(403).send('이미 사용중인 닉네임입니다.');
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10); // 비밀번호 해시화 보통 10~13
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send('ok'); // 회원가입 성공
  } catch (error) {
    console.error(error);
    next(error);  // status 500
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => { // 미들웨어 확장
  passport.authenticate('local', (err, user, info) => {
    if (err) {  // 서버에러
      console.error(err);
      return next(err);
    }
    if (info) { // 클라이언트에러
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if(loginErr) {  // passport 에러
        console.errer(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where:  { id: user.id },
        attributes: {
          exclude: ['password']   // 전체 데이터에서 password만 제외
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        }]
      })
      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res) => {    // POST /user/logout
  req.logout(() => {
    req.session.destroy();
    res.send('ok');
  });
});

router.patch('/nickname', isLoggedIn, async (req, res) => {   // PATCH /user/nickname
  try {
    await User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id },
    });
    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => {   // PATCH /user/1/follow
  try {
    const user = await User.findOne({
      where: { id: req.params.userId }
    });
    if (!user) {
      return res.status(403).send('존재하지 않는 사용자입니다.');
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => {   // DELETE /user/1/follow
  try {
    const user = await User.findOne({
      where: { id: req.params.userId }
    });
    if (!user) {
      return res.status(403).send('존재하지 않는 사용자입니다.');
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => {   // DELETE /user/follower/1
  try {
    const user = await User.findOne({
      where: { id: req.params.userId }
    });
    if (!user) {
      return res.status(403).send('존재하지 않는 사용자입니다.');
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;