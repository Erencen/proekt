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
        title: 'Serra Angel',
        img: 'https://example.com/serra_angel.jpg',
        price: 3,
        condition: 'Mint',
        userId: 1,
      },
      {
        title: 'Shivan Dragon',
        img: 'https://example.com/shivan_dragon.jpg',
        price: 15,
        condition: 'Near Mint',
        userId: 1,
      },
      {
        title: 'Black Lotus',
        img: 'https://example.com/black_lotus.jpg',
        price: 20000,
        condition: 'Good',
        userId: 1,
      },
      {
        title: 'Counterspell',
        img: 'https://example.com/counterspell.jpg',
        price: 1,
        condition: 'Excellent',
        userId: 2,
      },
      {
        title: 'Lightning Bolt',
        img: 'https://example.com/lightning_bolt.jpg',
        price: 0.5,
        condition: 'Mint',
        userId: 2,
      },
      {
        title: 'Giant Growth',
        img: 'https://example.com/giant_growth.jpg',
        price: 0.2,
        condition: 'Near Mint',
        userId: 2,
      },
      {
        title: 'Time Walk',
        img: 'https://example.com/time_walk.jpg',
        price: 10,
        condition: 'Good',
        userId: 2,
      },
      {
        title: 'Wrath of God',
        img: 'https://example.com/wrath_of_god.jpg',
        price: 4,
        condition: 'Excellent',
        userId: 2,
      },
      {
        title: 'Demonic Tutor',
        img: 'https://example.com/demonic_tutor.jpg',
        price: 8,
        condition: 'Mint',
        userId: 2,
      },
      {
        title: 'Swords to Plowshares',
        img: 'https://example.com/swords_to_plowshares.jpg',
        price: 5,
        condition: 'Near Mint',
        userId: 2,
      },
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
