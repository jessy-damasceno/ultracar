'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('vehicles', [
      {
        brand: 'Ford',
        model: 'Fiesta',
        year: 2021,
        color: 'Red',
        user_id: 2,
      },
      {
        brand: 'Chevrolet',
        model: 'Onix',
        year: 2020,
        color: 'Black',
        user_id: 2,
      },
      {
        brand: 'Volkswagen',
        model: 'Gol',
        year: 2019,
        color: 'Blue',
        user_id: 2,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vehicles', null, {});
  }
};
