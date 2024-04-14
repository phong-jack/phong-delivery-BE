const express = require('express');
const { verifyToken, checkShopPermisson } = require('../../auth/checkAuth');
const { asyncHandler } = require('../../helpers');
const { createNewOrder, setOrderStatus, getStatistics } = require('../../controllers/order.controller');
const router = express.Router();




router.post('/createNewOrder', verifyToken, asyncHandler(createNewOrder));
router.post('/setOrderStatus', verifyToken, asyncHandler(setOrderStatus));


router.get('/getStatistics', verifyToken, checkShopPermisson, asyncHandler(getStatistics));

module.exports = router;