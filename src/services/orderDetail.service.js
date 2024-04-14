const OrderDetail = require("../models/OrderDetail");


class OrderDetailService {
  static async createOrderDetail({ orderId, foodDrinkId, quantity }) {
    const orderDetail = await OrderDetail.create({ orderId, foodDrinkId, quantity });
    return orderDetail;
  }
}



module.exports = OrderDetailService;