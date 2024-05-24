const { Op } = require("sequelize");
const { ORDER_STATUS } = require("../constant");
const { BadRequestError } = require("../core/error.response");
const { Order } = require("../models");
const {
  sortOrdersByUpdatedAtDesc,
  getDatesInRange,
} = require("../utils/func.util");
const FoodDrinkService = require("./foodDrink.service");
const OrderDetailService = require("./orderDetail.service");
const OrderRepository = require("./repositories/order.repo");
const ShopService = require("./shop.service");

class OrderService {
  //SHOP ROLE
  static async getAllOrderByShop(shopId) {
    return await Order.findAll({
      where: { shopId },
    });
  }

  static async setOrderStatus({ OrderId, statusCode }) {
    return await Order.update(
      {
        statusCode,
      },
      { where: { OrderId }, raw: true }
    );
  }

  //USER
  /**
   * 1. tao don hang!
   * 2. Tao Detail don hang
   * 3. tra ve thong tin don hang vua duoc tao
   * 4. Neu co loi thi nem 404
   */
  static async createNewOrder({
    userId,
    shopId,
    address,
    note,
    paymentMethod,
    orderDetails = [],
  }) {
    //Tao don hang
    const { dataValues: newOrder } = await Order.create(
      {
        userId,
        shopId,
        address,
        note,
        paymentMethod,
      },
      { plan: true }
    );
    if (!newOrder) throw new BadRequestError("Can't create this Order!");
    if (orderDetails.length === 0)
      throw new BadRequestError("Order detail can't be null!");
    //Tao chi tiet don hang!
    const { orderId } = newOrder;
    const orderDetailPromises = orderDetails.map(async (detail) => {
      const { foodDrinkId: foodDrinkId, quantity: quantity } = detail;
      const newOrderDetail = await OrderDetailService.createOrderDetail({
        orderId: +orderId,
        foodDrinkId: +foodDrinkId,
        quantity: +quantity,
      });
      return newOrderDetail;
    });
    const createdOrderDetails = await Promise.all(orderDetailPromises);
    return {
      ...newOrder,
      orderDetail: createdOrderDetails,
    };
  }

  static async getStatistics({ shopId }) {
    return await OrderRepository.getStatiticsByMonth({ shopId, month: 4 });
  }

  static async calculatorOrder({ id }) {
    const orderDetails = await OrderDetailService.getOrderDetailByOrder({
      orderId: id,
    });
    let totalAmout = 0;
    for (const orderDetail of orderDetails) {
      const { foodDrinkId, quantity } = orderDetail;
      const amout = await FoodDrinkService.calculatorFoodDrink({
        id: foodDrinkId,
        quantity,
      });
      totalAmout += amout;
    }
    return totalAmout;
  }

  static async getFoodDrinksByOrderId({ id }) {
    const orderDetails = await OrderDetailService.getOrderDetailByOrder({
      orderId: id,
    });
    const foodDrinks = [];
    for (const orderDetail of orderDetails) {
      const { foodDrinkId } = orderDetail;
      const foodDrink = await FoodDrinkService.getFoodDrinkInfo(foodDrinkId);
      foodDrinks.push({ ...foodDrink, quantity: orderDetail.quantity });
    }
    return foodDrinks;
  }

  static async getOrderDetailsByUser({ userId }) {
    const orders = await OrderRepository.findAllByUser({ userId });

    const newOrders = [];
    for (const order of orders) {
      const foodDrinks = await OrderService.getFoodDrinksByOrderId({
        id: order.orderId,
      });
      const totalAmount = await OrderService.calculatorOrder({
        id: order.orderId,
      });
      const shop = await ShopService.getShopDetail({ shopId: order.shopId });
      const newOrder = {
        ...order,
        orderId: order.orderId,
        shopId: order.shopId,
        shopName: shop.name,
        statusCode: order.statusCode,
        totalAmount,
        foodDrinks,
      };

      newOrders.push(newOrder);
    }

    return newOrders;
  }

  static async getOrderDetailById({ orderId }) {
    const order = await OrderRepository.findById({ id: orderId });
    const foodDrinks = await OrderService.getFoodDrinksByOrderId({
      id: orderId,
    });
    const totalAmount = await OrderService.calculatorOrder({
      id: orderId,
    });
    const newOrder = {
      ...order,
      totalAmount: totalAmount,
      foodDrinks,
    };
    return newOrder;
  }

  //Dieu chinh trang thai don hang
  static async toggleOrderStatus({ orderId, orderStatus }) {
    const order = await this.getOrderDetailById({ orderId });

    if (!orderStatus) throw new BadRequestError("order status can't null");
    if (orderStatus == ORDER_STATUS.INIT)
      throw new BadRequestError("Không thể chuyển sang trạng thái này");
    if (orderStatus == order.statusCode)
      throw new BadRequestError("Không thể chuyển trạng thái trùng nhau!");

    //Hủy đơn
    if (orderStatus == ORDER_STATUS.CANCEL) {
      if (order.statusCode != ORDER_STATUS.INIT) {
        throw new BadRequestError("Không thể hủy đơn hàng");
      }
      return await OrderRepository.updateOrderStatus({ orderId, orderStatus });
    }
    // Xác nhận đơn
    if (orderStatus == ORDER_STATUS.ACCEPTED) {
      if (order.statusCode != ORDER_STATUS.INIT) {
        throw new BadRequestError("Không thể xác nhận đơn hàng");
      }
      return await OrderRepository.updateOrderStatus({ orderId, orderStatus });
    }

    if (orderStatus == ORDER_STATUS.SHIPPING) {
      if (order.statusCode != ORDER_STATUS.ACCEPTED) {
        throw new BadRequestError("Không thể chuyển sang trạng thái ship");
      }
      return await OrderRepository.updateOrderStatus({ orderId, orderStatus });
    }

    if (orderStatus == ORDER_STATUS.FINISHED) {
      if (order.statusCode != ORDER_STATUS.SHIPPING) {
        throw new BadRequestError("Đơn hàng chưa được hoàn thành");
      }
      return await OrderRepository.updateOrderStatus({ orderId, orderStatus });
    }
    // Quán có quyền từ chối luôn
    if (orderStatus == ORDER_STATUS.REJECTED) {
      return await OrderRepository.updateOrderStatus({ orderId, orderStatus });
    }
  }

  //get order paginate
  static async findOrderByShopPaginate({ shopId, page, perPage = 10 }) {
    const orders = await OrderRepository.findOrderByShopPaginate({
      shopId,
      page: +page || 1,
      perPage,
    });
    const orderDatas = orders.data;
    const newOrderDatas = [];
    for (const order of orderDatas) {
      const orderDetail = await this.getOrderDetailById({
        orderId: order.orderId,
      });
      const totalAmount = await OrderService.calculatorOrder({
        id: order.orderId,
      });
      const shop = await ShopService.getShopDetail({ shopId: order.shopId });
      const newOrderDetail = {
        ...order,
        totalAmout: totalAmount,
        shopName: shop.name,
        foodDrinks: orderDetail.foodDrinks,
      };
      newOrderDatas.push(newOrderDetail);
    }
    return { ...orders, data: newOrderDatas };
  }

  static async statisticOrderByYear({ shopId, year }) {
    const results = await OrderRepository.statiticsByYear({
      shopId,
      year,
    });

    return results;
  }

  static async reportByDay({ shopId, dateStart, dateEnd }) {
    const excludedStatuses = [ORDER_STATUS.CANCEL, ORDER_STATUS.REJECTED];
    const orders = await Order.findAll({
      where: {
        shopId: shopId,
        updatedAt: { [Op.between]: [new Date(dateStart), new Date(dateEnd)] },
        statusCode: { [Op.notIn]: excludedStatuses },
      },
      raw: true,
    });

    // Khởi tạo một object để lưu trữ số lượng đơn hàng và tổng số tiền theo ngày
    const orderStatsByDay = {};

    // Tạo một mảng chứa tất cả các ngày trong khoảng thời gian
    const allDates = [];
    let currentDate = new Date(dateStart);
    const endDate = new Date(dateEnd);

    while (currentDate <= endDate) {
      const formattedDate = currentDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      allDates.push(formattedDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Tạo mục thống kê cho mỗi ngày trong khoảng thời gian
    allDates.forEach((date) => {
      orderStatsByDay[date] = { totalOrders: 0, totalAmount: 0 };
    });

    for (const order of orders) {
      const orderDate = new Date(order.updatedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      const totalAmount = await OrderService.calculatorOrder({
        id: order.orderId,
      });

      orderStatsByDay[orderDate].totalOrders++;
      orderStatsByDay[orderDate].totalAmount += totalAmount || 0;
    }
    return orderStatsByDay;
  }
}

module.exports = OrderService;
