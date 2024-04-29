const express = require("express");
const { asyncHandler } = require("../../helpers");
const { verifyToken, checkShopPermisson } = require("../../auth/checkAuth");
const {
  getFoodDrinkByShopFromClient,
  getFoodDrinkByShop,
  toggleFoodDrinkStatus,
  uploadFoodDrinkImage,
  getFoodDrinkInfo,
  getFoodDrinkByShopPaginate,
  createNewFoodDrink,
  deleteFoodDrink,
  updateFoodDrink,
} = require("../../controllers/foodDrink.controller");
const { uploadSingle } = require("../../middleware/upload.middleware");
const router = express.Router();

//Khong can check token
router
  .get("/getShopProduct/:shopId", asyncHandler(getFoodDrinkByShopFromClient))
  .get("/shop/:id", asyncHandler(getFoodDrinkByShopPaginate))
  .get("/:id", asyncHandler(getFoodDrinkInfo));

//Check token
router
  .use(verifyToken, checkShopPermisson)
  .get("/getProductFromShop", asyncHandler(getFoodDrinkByShop))
  .put("/changeStatus/:id", asyncHandler(toggleFoodDrinkStatus))
  .post(
    "/uploadImage/:id",
    uploadSingle("image"),
    asyncHandler(uploadFoodDrinkImage)
  )
  .post("/create", asyncHandler(createNewFoodDrink))
  .delete("/:id", asyncHandler(deleteFoodDrink))
  .put("/update/:id", asyncHandler(updateFoodDrink));

module.exports = router;
// cha biet nua
// router.post("/changeStatus", verifyToken, asyncHandler(toggleFoodDrinkStatus));
// router.post(
//   "/changeStatus",
//   verifyToken,
//   checkShopPermisson,
//   asyncHandler(toggleFoodDrinkStatus)
// );
