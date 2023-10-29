const Sequelize = require('sequelize');
const sequelize = require('../lib/sequelize');

const Product = sequelize.define(
    'Product',
    {},
    {timestamps: true, paranoid: true},
);

module.exports = Product;
