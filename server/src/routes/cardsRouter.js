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
    const { title, img, price, condition, status} = req.body;
    
    try {
        const newCard = await Card.create({
            title,
            img,
            price,
            condition,
            status,
            userId : res.locals.user.id
        })
        res.json(newCard)
    } catch(error) {
        console.log(error)
        res.status(500).json({message : 'Ошибка добавления карточки'})
    }
    })
    cardsRouter.route('/:id')
    .put( async (req, res) => { 
      const { id } = req.params; 
      const { status } = req.body; 
   
      try { 
          const card = await Card.findByPk(id); 
          if (!card) { 
              return res.status(404).json({ error: 'Карточка не найдена' }); 
          } 
   
          card.status = status; 
          await card.save(); 
   
          res.json(card); 
      } catch (error) { 
          console.error("Ошибка при обновлении статуса карточки:", error); 
          res.status(500).json({ error: 'Внутренняя ошибка сервера' }); 
      } 
  });

module.exports = cardsRouter;