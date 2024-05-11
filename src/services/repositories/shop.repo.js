const { raw } = require("mysql2");
const Shop = require("../../models/Shop");
const { Sequelize } = require("sequelize");

class ShopRepository {
  static async findAll() {
    return await Shop.findAll();
  }

  static async findById(shopId) {
    return await Shop.findByPk(shopId, { raw: true });
  }
  static async findShopPaginate({ query = {}, page, perPage }) {
    const offset = (page - 1) * perPage;
    const limit = perPage;
    const { count, rows } = await Shop.findAndCountAll({
      where: query,
      offset,
      limit,
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

  static async findShopByQueryPaginate({ query, page, perPage }) {
    const offset = (page - 1) * perPage;
    const limit = perPage;
    const { count, rows } = await Shop.findAndCountAll({
      where: {
        name: { [Sequelize.Op.like]: `%${query}%` },
      },
      offset,
      limit,
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

  static async updateStatus({ id, isWorking }) {
    return await Shop.update({ isWorking }, { where: { id } });
  }
}

module.exports = ShopRepository;
