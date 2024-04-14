const express = require('express');
const { asyncHandler } = require('../../helpers');
const { verifyToken, checkShopPermisson } = require('../../auth/checkAuth');
const { getFoodDrinkByShopFromClient, getFoodDrinkByShop, toggleFoodDrinkStatus, uploadFoodDrinkImage } = require('../../controllers/foodDrink.controller');
const { uploadSingle } = require('../../middleware/upload.middleware');
const router = express.Router();

//Khong can check token
router.get('/foodDrink/getShopProduct/:shopId', asyncHandler(getFoodDrinkByShopFromClient));



router.get('/getProductFromShop', verifyToken, checkShopPermisson, asyncHandler(getFoodDrinkByShop));
router.post('/changeStatus', verifyToken, asyncHandler(toggleFoodDrinkStatus));
router.post('/changeStatus', verifyToken, checkShopPermisson, asyncHandler(toggleFoodDrinkStatus));
router.post('/uploadImage/:id', verifyToken, checkShopPermisson, uploadSingle('image'), asyncHandler(uploadFoodDrinkImage));


module.exports = router;