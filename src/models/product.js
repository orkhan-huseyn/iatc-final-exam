const Sequelize = require('sequelize');
const sequelize = require('../lib/sequelize');

const Product = sequelize.define(
  'Product',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
    },
  },
  { timestamps: true, paranoid: true }
);

module.exports = Product;
