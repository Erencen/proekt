const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const authRouter = require('./routes/authRouter');
const tokenRouter = require('./routes/tokenRouter');
const { Card, Basket, User } = require('../db/models');
// const { verifyAccessToken } = require('./middlewares/verifyTokens');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);

app.get('/api/cards/basket/:userId', async (req, res) => {
  const { userId } = req.params;

  const buyCards = await Card.findAll({
    include: {
        model: User,
        as: 'buy',
        where: { id: userId }
    }
});
  console.log(buyCards);
  res.json(buyCards);
});

module.exports = app;
