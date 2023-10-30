const Sequelize = require('sequelize');
const sequelize = require('../lib/sequelize');

const Product = sequelize.define(
    'Product',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DECIMAL,
      },
      stockCount: {
        type: Sequelize.INTEGER,
      },
    },
    {timestamps: true, paranoid: true},
);

module.exports = Product;
