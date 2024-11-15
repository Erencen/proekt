const { verifyAccessToken } = require('../middlewares/verifyTokens');
const { Basket } = require('../../db/models');
const basketRouter = require('express').Router();

basketRouter.route('/:cardId').post(verifyAccessToken, async (req, res) => {
  const { cardId } = req.params;
  if (!cardId) {
    return res.status(400).json({ message: 'cardId is required' });
  }

  try {
    const newBasket = await Basket.create({ cardId, as: 'buy', userId: res.locals.user.id });
    res.status(201).json(newBasket);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка сервера', error });
  }
});

module.exports = basketRouter;
