const express = require("express");
const { verifyToken, checkShopPermisson } = require("../../auth/checkAuth");
const { asyncHandler } = require("../../helpers");
const {
  getAllShop,
  getShopDetail,
  getShopCategory,
  getShopFoodDrink,
  getShopsPaginate,
  toggleShopStatus,
} = require("../../controllers/shop.controller");
const router = express.Router();

// router.get("/", asyncHandler(getAllShop));
router.get("/", asyncHandler(getShopsPaginate));
router.get("/:id", asyncHandler(getShopDetail));
router.get("/:id/category", asyncHandler(getShopCategory));
router.get("/:id/foodDrink", asyncHandler(getShopFoodDrink));
router
  .use(verifyToken, checkShopPermisson)
  .post("/changeStatus/:id", asyncHandler(toggleShopStatus));

module.exports = router;
