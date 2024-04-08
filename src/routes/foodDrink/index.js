const express = require('express');
const { asyncHandler } = require('../../helpers');
const { verifyToken, checkShopPermisson } = require('../../auth/checkAuth');
const { getFoodDrinkByShopFromClient, getFoodDrinkByShop, toggleFoodDrinkStatus } = require('../../controllers/foodDrink.controller');
const router = express.Router();

//Khong can check token
router.get('/foodDrink/getShopProduct/:shopId', asyncHandler(getFoodDrinkByShopFromClient));

//Can check token, chi co shop moi duoc them category!
// router.use(verifyToken);
// router.use(checkShopPermisson);


router.get('/foodDrink/getProductFromShop', asyncHandler(getFoodDrinkByShop));
router.post('/foodDrink/changeStatus', asyncHandler(toggleFoodDrinkStatus));


module.exports = router;