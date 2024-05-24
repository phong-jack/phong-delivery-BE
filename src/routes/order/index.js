const express = require("express");
const { verifyToken, checkShopPermisson } = require("../../auth/checkAuth");
const { asyncHandler } = require("../../helpers");
const {
  createNewOrder,
  setOrderStatus,
  getStatistics,
  getOrderDetailsByUser,
  getOrderDetailById,
  toggleOrderStatus,
  getOrderByShopPaginate,
  statisticOrderByYear,
  reportByDay,
} = require("../../controllers/order.controller");
const router = express.Router();

router
  .use(verifyToken)
  .post("/createNewOrder", asyncHandler(createNewOrder))
  .post("/setOrderStatus", asyncHandler(setOrderStatus))
  .get("/:userId", asyncHandler(getOrderDetailsByUser))
  .get("/detail/:id", asyncHandler(getOrderDetailById))
  .post("/toggleStatus/:id", asyncHandler(toggleOrderStatus))
  .get("/shop/:id", asyncHandler(getOrderByShopPaginate));

router
  .use(verifyToken, checkShopPermisson)
  .get("/getStatistics", asyncHandler(getStatistics))
  .get("/statisticsByYear/:year", asyncHandler(statisticOrderByYear))
  .get("/report/:shopId", asyncHandler(reportByDay));

module.exports = router;
