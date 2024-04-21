const FoodDrink = require("../../models/FoodDrink");

class FoodDrinkRepository {
  static async getFoodDrinkInfo(id) {
    return await FoodDrink.findByPk(id);
  }

  static async updateFoodDrink({ id, image }) {
    await FoodDrink.update({ image: image }, { where: { id } });
    return await FoodDrink.findByPk(id);
  }

  static async findFoodDrinkByShop({ shopId }) {
    return await FoodDrink.findAll({ where: { shopId }, raw: true });
  }
}

module.exports = FoodDrinkRepository;
