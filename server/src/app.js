const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const authRouter = require('./routes/authRouter');
 const tokenRouter = require('./routes/tokenRouter');
const {Card, Basket} = require('../db/models');




const app = express();


app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


 app.use('/api/auth', authRouter); 
 app.use('/api/tokens', tokenRouter);

 app.get('/:id', async (req, res) => {
    const {id} = req.params;
    
    const allCard = await Basket.findAll({
        where: {
            userId: id,
            as: 'basket'
        }
    })
    console.log(allCard);
    res.json(allCard)
 })

    



module.exports = app;