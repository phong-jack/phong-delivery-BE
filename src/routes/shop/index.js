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
  findShopByQueryPaginate,
  updateShop,
  findShopByDistance,
} = require("../../controllers/shop.controller");
const router = express.Router();

// router.get("/", asyncHandler(getAllShop));
router.get("/", asyncHandler(getShopsPaginate));
router.get("/find", asyncHandler(findShopByQueryPaginate));
router.get("/:id", asyncHandler(getShopDetail));
router.get("/:id/category", asyncHandler(getShopCategory));
router.get("/:id/foodDrink", asyncHandler(getShopFoodDrink));

router
  .use(verifyToken)
  .get("/find/by-distance", asyncHandler(findShopByDistance));

router
  .use(verifyToken, checkShopPermisson)
  .post("/changeStatus/:id", asyncHandler(toggleShopStatus))
  .put("/update/:id", asyncHandler(updateShop));

module.exports = router;
