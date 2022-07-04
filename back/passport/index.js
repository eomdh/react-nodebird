const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);  // user정보중에서 쿠키랑 묶어줄 id만    
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id }})
      done(null, user);
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};