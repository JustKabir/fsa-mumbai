'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.changeColumn('Companies', 'brand_image', {
      type: Sequelize.TEXT,
      allowNull: true, // Update this based on your requirement
    });

    await queryInterface.changeColumn('Companies', 'variant_brand1_image', {
      type: Sequelize.TEXT,
      allowNull: true, // Update this based on your requirement
    });
    await queryInterface.changeColumn('Companies', 'variant_brand2_image', {
      type: Sequelize.TEXT,
      allowNull: true, // Update this based on your requirement
    });
    await queryInterface.changeColumn('Companies', 'variant_brand3_image', {
      type: Sequelize.TEXT,
      allowNull: true, // Update this based on your requirement
    });
    await queryInterface.changeColumn('Companies', 'variant_brand4_image', {
      type: Sequelize.TEXT,
      allowNull: true, // Update this based on your requirement
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};