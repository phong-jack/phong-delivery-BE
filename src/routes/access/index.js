const express = require("express");
const { asyncHandler } = require("../../helpers");
const {
  login,
  register,
  verifyUser,
  sendVerifyRequest,
  logout,
  requestRefreshToken,
  changePassword,
} = require("../../controllers/access.controller");
const { verifyToken } = require("../../auth/checkAuth");
const router = express.Router();

//khong can check token!
router.post("/login", asyncHandler(login));
router.post("/register", asyncHandler(register));
router.get("/verifyUser", asyncHandler(verifyUser));
router.post("/refresh", asyncHandler(requestRefreshToken));

//check token!
router
  .use(verifyToken)
  .post("/sendVerifyRequest", asyncHandler(sendVerifyRequest))
  .post("/logout", asyncHandler(logout))
  .post("/changePassword/:id", asyncHandler(changePassword));

module.exports = router;
