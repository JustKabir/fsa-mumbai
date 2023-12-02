'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Players', [
      {
        username: 'john_doe',
        password: '$2b$10$u5Lr6guem5DwTlpl.j59gu1ZeE3Dey7UgZMFQtEQmbCc507ef4SlC',
        email: 'john_doe@example.com',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toDateString()
      },
      {
        username: 'jane_doe',
        password: '$2b$10$u5Lr6guem5DwTlpl.j59gu1ZeE3Dey7UgZMFQtEQmbCc507ef4SlC',
        email: 'jane_doe@example.com',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Players', null, {});
  }
};
