const cardsRouter = require('express').Router();
const { Card, User } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');

cardsRouter.route('/')
.get(async (req, res) => {
  try {
    const cardArr = await Card.findAll({
        include: [{ model: User, attributes: ['name', 'id', 'city'] }],
        order: [['createdAt', 'DESC']],
    });
    res.json(cardArr);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
})
.post(verifyAccessToken, async (req,res) => {
    const { title, img, price, condition} = req.body;
    
    try {
        const newCard = await Card.create({
            title,
            img,
            price,
            condition,
            userId : res.locals.user.id
        })
        res.json(newCard)
    } catch(error) {
        console.log(error)
        res.status(500).json({message : 'Ошибка добавления карточки'})
    }
    })


module.exports = cardsRouter;