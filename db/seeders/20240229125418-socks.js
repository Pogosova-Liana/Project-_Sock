'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Socks',
      [
        {
          imgSock: 'sock1',
          color: 1,
          design: 1,
          photo: 1,
          price: '90 руб.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imgSock: 'sock2',
          color: 1,
          design: 1,
          photo: 2,
          price: '91 руб.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imgSock: 'sock3',
          color: 1,
          design: 1,
          photo: 3,
          price: '92 руб.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imgSock: 'sock4',
          color: 1,
          design: 2,
          photo: 1,
          price: '93 руб.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imgSock: 'sock5',
          color: 1,
          design: 2,
          photo: 2,
          price: '94 руб.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imgSock: 'sock6',
          color: 1,
          design: 2,
          photo: 3,
          price: '95 руб.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imgSock: 'sock7',
          color: 1,
          design: 3,
          photo: 1,
          price: '96 руб.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Socks', null, {});
  },
};
