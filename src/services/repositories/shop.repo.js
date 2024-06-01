const { raw } = require("mysql2");
const Shop = require("../../models/Shop");
const { Sequelize, literal, Op } = require("sequelize");

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

  static async findAllByDistance(userLocate, page = 1, limit = 10) {
    const userLatitude = userLocate.lat;
    const userLongitude = userLocate.lng;

    const distanceQuery = literal(`(
      6371 * acos(
        cos(radians(${userLatitude})) *
        cos(radians(lat)) *
        cos(radians(lng) - radians(${userLongitude})) +
        sin(radians(${userLatitude})) *
        sin(radians(lat))
      )
    )`);

    const result = await Shop.findAndCountAll({
      attributes: {
        include: [[distanceQuery, "distance"]],
      },
      where: {
        lat: { [Op.ne]: null },
        lng: { [Op.ne]: null },
      },
      order: [[literal("distance"), "ASC"]],
      limit: limit,
      offset: (page - 1) * limit,
    });

    const shops = result.rows;
    const count = result.count;

    return [shops, count];
  }
}

module.exports = ShopRepository;
