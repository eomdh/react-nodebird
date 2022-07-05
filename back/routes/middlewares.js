exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();  // next() 인자에 뭐라도 있으면 에러 처리이고, 아무것도 없으면 않으면 다음 미들웨어로
  } else {
    res.status(401).send('로그인이 필요합니다.');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send('먼저 로그아웃을 해주세요.');
  }
};