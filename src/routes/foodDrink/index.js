const express = require("express");
const { asyncHandler } = require("../../helpers");
const { verifyToken, checkShopPermisson } = require("../../auth/checkAuth");
const {
  getFoodDrinkByShopFromClient,
  getFoodDrinkByShop,
  toggleFoodDrinkStatus,
  uploadFoodDrinkImage,
  getFoodDrinkInfo,
} = require("../../controllers/foodDrink.controller");
const { uploadSingle } = require("../../middleware/upload.middleware");
const router = express.Router();

//Khong can check token
router.get(
  "/getShopProduct/:shopId",
  asyncHandler(getFoodDrinkByShopFromClient)
);
router.get("/:id", asyncHandler(getFoodDrinkInfo));

//Check token
router
  .use(verifyToken)
  .get(
    "/getProductFromShop",
    checkShopPermisson,
    asyncHandler(getFoodDrinkByShop)
  )
  .post("/changeStatus", asyncHandler(toggleFoodDrinkStatus))
  .post(
    "/uploadImage/:id",
    checkShopPermisson,
    uploadSingle("image"),
    asyncHandler(uploadFoodDrinkImage)
  );

module.exports = router;
// cha biet nua
// router.post("/changeStatus", verifyToken, asyncHandler(toggleFoodDrinkStatus));
// router.post(
//   "/changeStatus",
//   verifyToken,
//   checkShopPermisson,
//   asyncHandler(toggleFoodDrinkStatus)
// );
