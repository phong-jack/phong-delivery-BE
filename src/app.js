const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


//config
const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
require('dotenv').config();

// init DB
require('./db/mysql.connect');
const Shop = require('./models/Shop');
const Location = require('./models/Location');
const OrderStatus = require('./models/OrderStatus');
const Review = require('./models/Review');
const User = require('./models/User');
const Invoice = require('./models/Invoice');
const Category = require('./models/Category');
const FoodDrink = require('./models/FoodDrink');
const InvoiceDetail = require('./models/InvoiceDetail');
//export app obj

console.log("Check date: " + new Date());

module.exports = app;