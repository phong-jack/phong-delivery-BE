const { OK, CREATED } = require("../core/success.response");
const OrderService = require("../services/order.service");

class OrderController {
  async getAllOrderByShop(req, res) {
    new OK({
      message: "Get Order data by shop success!",
      metadata: await OrderService.getAllOrderByShop(req.user.shopId),
    }).send(res);
  }
  //ham nay can check ky cang!
  async setOrderStatus(req, res) {
    new OK({
      message: "Change Order OK!",
      metadata: await OrderService.setOrderStatus({
        OrderId: req.body.OrderId,
        statusCode: req.body.statusCode,
      }),
    }).send(res);
  }

  async createNewOrder(req, res) {
    new CREATED({
      message: "Create new Order success!",
      metadata: await OrderService.createNewOrder({
        userId: req.user.id,
        ...req.body,
      }),
    }).send(res);
  }

  async getStatistics(req, res) {
    new OK({
      message: "get Statistics success!",
      metadata: await OrderService.getStatistics({ shopId: req.user.shopId }),
    }).send(res);
  }

  async getOrderDetailsByUser(req, res) {
    new OK({
      message: "Get order detail success!",
      metadata: await OrderService.getOrderDetailsByUser({
        userId: req.params.userId,
      }),
    }).send(res);
  }

  async getOrderDetailById(req, res) {
    new OK({
      message: "Get order detail success!",
      metadata: await OrderService.getOrderDetailById({
        orderId: req.params.id,
      }),
    }).send(res);
  }

  async toggleOrderStatus(req, res) {
    new OK({
      message: "Change status ok!",
      metadata: await OrderService.toggleOrderStatus({
        orderId: req.params.id,
        orderStatus: req.body.orderStatus,
      }),
    }).send(res);
  }

  async getOrderByShopPaginate(req, res) {
    new OK({
      message: "Get order success!",
      metadata: await OrderService.findOrderByShopPaginate({
        shopId: req.params.id,
        page: req.query.page,
        perPage: req.query.per_page,
      }),
    }).send(res);
  }
}

module.exports = new OrderController();
