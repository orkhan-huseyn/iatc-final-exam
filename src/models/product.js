const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../lib/sequelize');

const Product = sequelize.define('Product', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  stockCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Product;
