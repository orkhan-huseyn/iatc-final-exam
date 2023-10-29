require('dotenv').config();

const express = require('express');
const {V1_ROUTER} = require('./routes/index');
const sequelize = require('./lib/sequelize');

const app = express();

sequelize.sync();

const port = process.env.PORT || 8888;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1', V1_ROUTER);

app.listen(port, function() {
  console.log(`Express app is running on port ${port}`);
});
