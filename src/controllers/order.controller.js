const { OK, CREATED } = require("../core/success.response");
const OrderService = require("../services/order.service");



class OrderController {
  async getAllOrderByShop(req, res) {
    new OK({
      message: "Get Order data by shop success!",
      metadata: await OrderService.getAllOrderByShop(req.user.shopId)
    }).send(res);
  }
  //ham nay can check ky cang!
  async setOrderStatus(req, res) {
    new OK({
      message: "Change Order OK!",
      metadata: await OrderService.setOrderStatus({ OrderId: req.body.OrderId, statusCode: req.body.statusCode })
    }).send(res);
  }

  async createNewOrder(req, res) {
    new CREATED({
      message: "Create new Order success!",
      metadata: await OrderService.createNewOrder({ userId: req.user.id, ...req.body })
    }).send(res);
  }

  async getStatistics(req, res) {
    new OK({
      message: "get Statistics success!",
      metadata: await OrderService.getStatistics({ shopId: req.user.shopId })
    }).send(res);
  }
}



module.exports = new OrderController();