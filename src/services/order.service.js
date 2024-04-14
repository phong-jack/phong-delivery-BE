
const { BadRequestError } = require('../core/error.response');
const { Order } = require('../models');
const OrderDetailService = require('./orderDetail.service');
const OrderRepository = require('./repositories/order.repo');

class OrderService {

  //SHOP ROLE
  static async getAllOrderByShop(shopId) {
    return await Order.findAll({
      where: { shopId }
    });
  }

  static async setOrderStatus({ OrderId, statusCode }) {
    return await Order.update({
      statusCode
    }, { where: { OrderId }, raw: true });
  }

  //USER
  /**
   * 1. tao don hang!
   * 2. Tao Detail don hang
   * 3. tra ve thong tin don hang vua duoc tao
   * 4. Neu co loi thi nem 404
   */
  static async createNewOrder({ userId, shopId, orderDetails = [] }) {
    //Tao don hang
    const { dataValues: newOrder } = await Order.create({
      userId, shopId,
    }, { plan: true });
    if (!newOrder) throw new BadRequestError("Can't create this Order!");
    if (orderDetails.length === 0) throw new BadRequestError("Order detail can't be null!");
    //Tao chi tiet don hang!
    const { orderId } = newOrder;
    const orderDetailPromises = orderDetails.map(async (detail) => {
      const { foodDrinkId: foodDrinkId, quantity: quantity } = detail;
      const newOrderDetail = await OrderDetailService.createOrderDetail({
        orderId: +orderId, foodDrinkId: +foodDrinkId, quantity: +quantity
      });
      return newOrderDetail;
    });
    const createdOrderDetails = await Promise.all(orderDetailPromises);
    return {
      ...newOrder,
      orderDetail: createdOrderDetails
    };
  }

  static async getStatistics({ shopId }) {
    console.log("Check shopid:", shopId);
    return await OrderRepository.getStatiticsByMonth({ shopId, month: 4 });
  }

}



module.exports = OrderService;