const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const authRouter = require('./routes/authRouter');
const tokenRouter = require('./routes/tokenRouter');
const cardsRouter = require('./routes/cardsRouter')
const searchRouter = require('./routes/searchRouter')



const app = express();


app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



 app.use('/api/auth', authRouter); 
 app.use('/api/tokens', tokenRouter);
 app.use('/api/cards', cardsRouter)
 app.use('/api/search', searchRouter)


    



module.exports = app;