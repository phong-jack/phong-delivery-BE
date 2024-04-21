const Shop = require("../../models/Shop");

class ShopRepository {
  static async findAll() {
    return await Shop.findAll();
  }

  static async findById(shopId) {
    return await Shop.findByPk(shopId);
  }
  static async findShopPaginate({ query = {}, page, perPage }) {
    console.log("check page : ", page);
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
}

module.exports = ShopRepository;
