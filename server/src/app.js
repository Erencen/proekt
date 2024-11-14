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

 app.get('/:id', async (req, res) => {
    const {id} = req.params;
    
    const allBuyCard = await Basket.findAll({
        where: {
            userId: id,
        }
    })
    console.log(allBuyCard);
    res.json(allBuyCard)
 });
    


    



module.exports = app;