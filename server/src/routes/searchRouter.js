const searchRouter = require('express').Router();
const { Op } = require('sequelize');
const { Card } = require('../../db/models');

searchRouter.get('/', async (req, res) => {
  const { filter } = req.query;
  try {
    const cardArr = await Card.findAll({
      where: { title: { [Op.iLike]: `%${filter}%` } },
    });
    res.json(cardArr);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }

});
module.exports = searchRouter;