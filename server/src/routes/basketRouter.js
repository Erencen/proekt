const basketRouter = require('express').Router()


basketRouter.post('/cards/basket/:userId', async (req, res) => {
    const { cardId } = req.params
    const basketArr = await Basket.
})