const FoodDrink = require("../../models/FoodDrink");

class FoodDrinkRepository {
  static async getFoodDrinkInfo(id) {
    return await FoodDrink.findByPk(id, { raw: true });
  }

  static async updateFoodDrink({ id, image }) {
    await FoodDrink.update({ image: image }, { where: { id } });
    return await FoodDrink.findByPk(id);
  }

  static async findFoodDrinkByShop({ shopId }) {
    return await FoodDrink.findAll({ where: { shopId }, raw: true });
  }

  static async findFoodDrinkByShopPaginate({ shopId, page, perPage }) {
    const offset = (page - 1) * perPage;
    const limit = perPage;
    const { count, rows } = await FoodDrink.findAndCountAll({
      where: { shopId },
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

module.exports = FoodDrinkRepository;
