const cardsRouter = require('express').Router();
const { Card, User } = require('../../db/models');

cardsRouter.route('/').get(async (req, res) => {
  try {
    const cardArr = await Card.findAll({
        include: [{ model: User, attributes: ['name', 'id', 'city'] }],
    });
    res.json(cardArr);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = cardsRouter;
