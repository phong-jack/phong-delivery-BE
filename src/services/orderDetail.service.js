const { where } = require("sequelize");
const OrderDetail = require("../models/OrderDetail");

class OrderDetailService {
  static async createOrderDetail({ orderId, foodDrinkId, quantity }) {
    const orderDetail = await OrderDetail.create({
      orderId,
      foodDrinkId,
      quantity,
    });
    return orderDetail;
  }

  static async getOrderDetailByOrder({ orderId }) {
    const orderDetails = await OrderDetail.findAll({
      where: { orderId },
      raw: true,
    });
    return orderDetails;
  }
}

module.exports = OrderDetailService;
