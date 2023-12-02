'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {

    }
  }
  Admin.init({
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      notEmpty: true
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      isLowercase: true,
      notEmpty: true,
      isEmail: true
    }
  }, {
    sequelize,
    modelName: 'Admin',
    tableName: 'Admins',
  });
  return Admin;
};