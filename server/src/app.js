const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const authRouter = require('./routes/authRouter');
 const tokenRouter = require('./routes/tokenRouter');
 const { Card, Basket, User } = require('../db/models');
const cardsRouter = require('./routes/cardsRouter');
const searchRouter = require('./routes/searchRouter');
const basketRouter = require('./routes/basketRouter')
const path = require('path');


const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



 app.use('/api/auth', authRouter); 
 app.use('/api/tokens', tokenRouter);
 app.use('/api/cards', cardsRouter)
 app.use('/api/search', searchRouter)
 app.use('/api/card/basket/add', basketRouter )
 
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
  
  
  app.use(express.static(path.join(__dirname, '..', 'dist')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
  });
  
  
  module.exports = app;
  