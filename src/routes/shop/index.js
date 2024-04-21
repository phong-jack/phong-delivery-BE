const express = require("express");
const { verifyToken } = require("../../auth/checkAuth");
const { asyncHandler } = require("../../helpers");
const {
  getAllShop,
  getShopDetail,
  getShopCategory,
  getShopFoodDrink,
  getShopsPaginate,
} = require("../../controllers/shop.controller");
const router = express.Router();

// router.get("/", asyncHandler(getAllShop));
router.get("/", asyncHandler(getShopsPaginate));
router.get("/:id", asyncHandler(getShopDetail));
router.get("/:id/category", asyncHandler(getShopCategory));
router.get("/:id/foodDrink", asyncHandler(getShopFoodDrink));

module.exports = router;
