const express = require('express');
const { verifyToken } = require('../../auth/checkAuth');
const { asyncHandler } = require('../../helpers');
const { createNewOrder, setOrderStatus } = require('../../controllers/order.controller');
const router = express.Router();




router.post('/createNewOrder', verifyToken, asyncHandler(createNewOrder));
router.post('/setOrderStatus', verifyToken, asyncHandler(setOrderStatus));


module.exports = router;