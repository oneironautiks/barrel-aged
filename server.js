const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 3000;

const app = express();
const { userRouter } = require('./routes/userRouter');
const { whiskeyRouter } = require('./routes/wiskeyRouter');


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());


// Routes
app.use('/users', userRouter);
app.use('/whiskey', whiskeyRouter);


app.get('/ping', (req, res) => {
  res.json('pong!');
});



app.listen(PORT, () => {
  console.log(`barrel-aged server listening on port ${PORT}`);
});