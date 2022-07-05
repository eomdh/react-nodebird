const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post } = require('../models'); // 구조분해할당
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

router.get('/', async (req, res, next) => {   // GET /user/ 
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

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.send('ok');
  });
});

router.patch('/nickname', isLoggedIn, async (req, res) => {
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

module.exports = router;