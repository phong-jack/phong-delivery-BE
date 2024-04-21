const express = require("express");
const { verifyToken } = require("../../auth/checkAuth");
const { asyncHandler } = require("../../helpers");
const { uploadOneFile } = require("../../controllers/upload.controller");
const { uploadSingle } = require("../../middleware/upload.middleware");
const {
  updateProfile,
  getUserProfile,
} = require("../../controllers/user.controller");
const router = express.Router();

router
  .use(verifyToken)
  .post("/upload", uploadSingle("image"), asyncHandler(uploadOneFile))
  .post("/update", asyncHandler(updateProfile))
  .get("/:id", asyncHandler(getUserProfile));

module.exports = router;
