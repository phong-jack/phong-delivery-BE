const express = require("express");
const { asyncHandler } = require("../../helpers");
const { verifyToken, checkShopPermisson } = require("../../auth/checkAuth");
const {
  getAllCategory,
  createNewCategory,
} = require("../../controllers/category.controller");
const router = express.Router();

//Khong can check token
router.get("/", asyncHandler(getAllCategory));

//Can check token, chi co shop moi duoc them category!
router.post(
  "/createNewCategory",
  verifyToken,
  checkShopPermisson,
  asyncHandler(createNewCategory)
);

module.exports = router;
