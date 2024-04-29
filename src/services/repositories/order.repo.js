const { Order } = require("../../models");
const { sequelize } = require("../../models/OrderStatus");

class OrderRepository {
  static async findById({ id }) {
    return await Order.findByPk(id, { raw: true });
  }

  static async getStatisticsByMonths({ shopId }) {
    const query = `
    SELECT YEAR(\`order\`.\`updatedAt\`) AS order_year,
      MONTH(\`order\`.\`updatedAt\`) AS order_month,
      COUNT(\`order\`.\`orderId\`) as total_orders,
      SUM(\`order_detail\`.\`quantity\` * \`food_drink\`.\`price\`) AS total_revenue
    FROM \`order\`
    LEFT JOIN \`order_detail\` ON \`order\`.\`orderId\` = \`order_detail\`.\`orderId\`
    LEFT JOIN \`food_drink\` ON \`order_detail\`.\`foodDrinkId\` = \`food_drink\`.\`id\`
    WHERE \`order\`.\`statusCode\` = 0 AND \`order\`.shopId = ${shopId}
    GROUP BY YEAR(\`order\`.\`updatedAt\`), MONTH(\`order\`.\`updatedAt\`);
  `;
    const results = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
    return results;
  }

  static async getStatiticsByMonth({ shopId, month }) {
    const monthsResults = await this.getStatisticsByMonths({ shopId });
    const [monthResult] = monthsResults.filter(
      (monthResult) => monthResult.order_month === month
    );
    return monthResult;
  }

  static async findAllByUser({ userId }) {
    return await Order.findAll({
      userId,
      raw: true,
      order: [["updatedAt", "DESC"]],
    });
  }

  static async updateOrderStatus({ orderId, orderStatus }) {
    await Order.update({ statusCode: orderStatus }, { where: { orderId } });
    const order = await Order.findByPk(orderId, { raw: true });

    return order;
  }

  static async findOrderByShopPaginate({ shopId, page, perPage }) {
    const offset = (page - 1) * perPage;
    const limit = perPage;
    const { count, rows } = await Order.findAndCountAll({
      where: { shopId },
      offset,
      limit,
      raw: true,
      order: [["updatedAt", "DESC"]],
    });

    const totalPages = Math.ceil(count / perPage);
    return {
      total: count,
      perPage,
      page,
      totalPages,
      data: rows,
    };
  }
}

module.exports = OrderRepository;
