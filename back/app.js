const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passportConfig = require('./passport');
const passport = require('passport');

const postRouter = require('./routes/post');
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

app.use(cors({
  origin: '*',
  credentials: false,
}));

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

app.get('/posts', (req, res) => {
  res.json([
    { id: 1, conetent: 'hello1' },
    { id: 2, conetent: 'hello2' },
    { id: 3, conetent: 'hello3' },
  ]);
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('listening on port 3065!')
});