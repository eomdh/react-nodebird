const express = require('express');
const postRouter = require('./routes/post');
const app = express();

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

app.listen(3065, () => {
  console.log('listening on port 3065!')
});