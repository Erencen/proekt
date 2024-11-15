const tokenRouter = require('express').Router();
const cookieConfig = require('../configs/cookie.config');
const { verifyRefreshToken } = require('../middlewares/verifyTokens');
const generateTokens = require('../utils/generateTokens');

tokenRouter.get('/refresh', verifyRefreshToken, (req, res) => {
  try {
    const { accessToken, refreshToken } = generateTokens({
      user: res.locals.user,
    });

    return res
      .cookie('refreshToken', refreshToken, cookieConfig.refresh)
      .json({ user: res.locals.user, accessToken });
  } catch (error) {
    console.error('Ошибка при обновлении токенов:', error);
    return res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = tokenRouter;
