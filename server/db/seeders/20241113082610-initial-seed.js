'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Oleg',
          email: '123@123',
          password: await bcrypt.hash('123', 10),
          city: 'Moscow',
        },
        {
          name: 'Vladimir',
          email: '1234@1234',
          password: await bcrypt.hash('123', 10),
          city: 'Moscow',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert('Cards', [
      {
        title: 'Коррозийная буря',
        img: 'https://spellmarket.ru/image/cache/catalog/cards/nph/ru/107-245x341.jpg',
        price: 3,
        condition: 'Mint',
        userId: 1,
        status: 'В наличии'
      },
      {
        title: 'Должное Уважение',
        img: 'https://spellmarket.ru/image/cache/catalog/cards/nph/ru/8-245x341.jpg',
        price: 15,
        condition: 'Near Mint',
        userId: 1,
        status: 'В наличии'
      },
      {
        title: 'Запретное солнце',
        img: 'https://spellmarket.ru/image/cache/catalog/cards/nph/ru/132-245x341.jpg',
        price: 20000,
        condition: 'Good',
        userId: 1,
        status: 'В наличии'
      },
      {
        title: 'Зараженное сознание',
        img: 'https://spellmarket.ru/image/cache/catalog/cards/mbs/ru/22-245x341.jpg',
        price: 1,
        condition: 'Excellent',
        userId: 2,
        status: 'В наличии'
      },
      {
        title: 'Паразитичесикий иплантант',
        img: 'https://spellmarket.ru/image/cache/catalog/cards/nph/ru/67-245x341.jpg',
        price: 0.5,
        condition: 'Mint',
        userId: 2,
        status: 'В наличии'
      },
      {
        title: 'Гнойный взрыв',
        img: 'https://spellmarket.ru/image/cache/catalog/cards/nph/ru/64-245x341.jpg',
        price: 0.2,
        condition: 'Near Mint',
        userId: 2,
        status: 'В наличии'
      },
      {
        title: 'Виридийский урожай',
        img: 'https://spellmarket.ru/image/cache/catalog/cards/nph/ru/125-245x341.jpg',
        price: 10,
        condition: 'Good',
        userId: 2,
        status: 'В наличии'
      },
      {
        title: 'Ненасытный душеед',
        img: 'https://spellmarket.ru/image/cache/catalog/cards/nph/ru/140-245x341.jpg',
        price: 4,
        condition: 'Excellent',
        userId: 2,
        status: 'В наличии'
      },
      {
        title: 'Паутина Опустошения',
        img: 'https://spellmarket.ru/image/cache/catalog/cards/mbs/ru/105-245x341.jpg',
        price: 8,
        condition: 'Mint',
        userId: 2,
        status: 'В наличии'
      },
      {
        title: 'Озеро Знаний',
        img: 'https://spellmarket.ru/image/cache/catalog/cards/mbs/ru/111-245x341.jpg',
        price: 5,
        condition: 'Near Mint',
        userId: 2,
        status: 'В наличии'
      },
    ]);

    await queryInterface.bulkInsert('Baskets', [
      {
        userId: 1,
        cardId: 1,
      },
      {
        userId: 1,
        cardId: 2,
      },
      {
        userId: 1,
        cardId: 3,
      },
      {
        userId: 2,
        cardId: 4,
      },
      {
        userId: 2,
        cardId: 5,
      }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
