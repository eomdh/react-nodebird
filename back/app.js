const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passportConfig = require('./passport');
const passport = require('passport');
const morgan = require('morgan');
const path = require('path');
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');

const db = require('./models');
const app = express();
dotenv.config();

db.sequelize.sync()
  .then(() => {
    console.log('Success DB Connect!');
  })
  .catch(console.error);

passportConfig();

app.use(morgan('dev'));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use('/', express.static(path.join(__dirname, 'uploads'))); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('listening on port 3065!')
});