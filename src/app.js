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
require("./models/index");

//init routes
app.use("/api/v1", require("./routes"));

//Error Handling
app.use(errorHandler);
app.use(notFoundHandler);

//export app obj
module.exports = app;
