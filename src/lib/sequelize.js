const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DATABASE_PATH,
});

sequelize
    .authenticate()
    .then(() => {
      console.log(`Connected to database successfully!`);
    })
    .catch((error) => {
      console.log(`Error connecting database: ${error.message}`);
    });

module.exports = sequelize;
