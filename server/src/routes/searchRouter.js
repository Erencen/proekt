const searchRouter = require('express').Router();
const { Op } = require('sequelize');
const { Craft } = require('../../db/models');

searchRouter.get('/', async (req, res) => {
  const { filter } = req.query;
  try {
    const craftArr = await Craft.findAll({
      where: { title: { [Op.iLike]: `%${filter}%` } },
    });
    res.json(craftArr);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }

});
module.exports = searchRouter;