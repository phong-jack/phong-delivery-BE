const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { errorHandler, notFoundHandler } = require("./helpers");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

//config
const app = express();
app.use(cors({ credentials: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
require("dotenv").config();
app.use(helmet());
app.use(morgan("dev"));

// init DB
require("./db/mysql.connect");
const Order = require("./models/Order");
const User = require("./models/User");
const OrderDetail = require("./models/OrderDetail");
const OrderStatus = require("./models/OrderStatus");
const Shop = require("./models/Shop");
const Location = require("./models/Location");
const Review = require("./models/Review");
const Category = require("./models/Category");
const FoodDrink = require("./models/FoodDrink");
const KeyToken = require("./models/KeyToken");

//init routes
app.use("/api/v1", require("./routes"));

//Error Handling
app.use(errorHandler);
app.use(notFoundHandler);

//export app obj
module.exports = app;
