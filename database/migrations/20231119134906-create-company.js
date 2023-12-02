'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand_name : Sequelize.STRING,
      brand_image: Sequelize.STRING,
      description: Sequelize.STRING,
      year_of_establishment: Sequelize.INTEGER,
      address: Sequelize.STRING,
      contact1_name: Sequelize.STRING,
      contact1_phone: Sequelize.STRING,
      contact2_name: Sequelize.STRING,
      contact2_phone:  Sequelize.STRING,
      variant_brand1_name: Sequelize.STRING,
      variant_brand1_image: Sequelize.STRING,
      variant_brand2_name: Sequelize.STRING,
      variant_brand2_image: Sequelize.STRING,
      variant_brand3_name: Sequelize.STRING,
      variant_brand3_image: Sequelize.STRING,
      variant_brand4_name : Sequelize.STRING,
      variant_brand4_image : Sequelize.STRING,
      men:Sequelize.ARRAY(Sequelize.STRING),
      women:Sequelize.ARRAY(Sequelize.STRING),
      boys:Sequelize.ARRAY(Sequelize.STRING),
      girls:Sequelize.ARRAY(Sequelize.STRING),
      fabric_type:Sequelize.ARRAY(Sequelize.STRING),
      yarn_used:Sequelize.ARRAY(Sequelize.STRING),
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Companies');
  }
};