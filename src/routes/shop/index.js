const express = require('express');
const { verifyToken } = require('../../auth/checkAuth');
const { asyncHandler } = require('../../helpers');
const { getAllShop } = require('../../controllers/shop.controller');
const router = express.Router();


router.get("/shop", asyncHandler(getAllShop));




module.exports = router;