'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init({
    brand_name: DataTypes.STRING,
    brand_image: DataTypes.TEXT,
    description: DataTypes.STRING,
    year_of_establishment: DataTypes.DATE,
    address: DataTypes.STRING,
    contact1_name: DataTypes.STRING,
    contact1_phone: DataTypes.STRING,
    contact2_name: DataTypes.STRING,
    contact2_phone: DataTypes.STRING,
    variant_brand1_name: DataTypes.STRING,
    variant_brand1_image: DataTypes.TEXT,
    variant_brand2_name: DataTypes.STRING,
    variant_brand2_image: DataTypes.TEXT,
    variant_brand3_name: DataTypes.STRING,
    variant_brand3_image: DataTypes.TEXT,
    variant_brand4_name: DataTypes.STRING,
    variant_brand4_image: DataTypes.TEXT,
    men: DataTypes.ARRAY(DataTypes.STRING),
    women: DataTypes.ARRAY(DataTypes.STRING),
    boys: DataTypes.ARRAY(DataTypes.STRING),
    girls: DataTypes.ARRAY(DataTypes.STRING),
    fabric_type: DataTypes.ARRAY(DataTypes.STRING),
    yarn_used: DataTypes.ARRAY(DataTypes.STRING)

  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};