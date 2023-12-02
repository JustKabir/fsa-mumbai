'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Companies', 'year_of_establishment', {
      type: Sequelize.TEXT,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Companies', 'year_of_establishment', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
  }
};
