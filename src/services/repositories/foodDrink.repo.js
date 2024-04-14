const FoodDrink = require("../../models/FoodDrink");

class FoodDrinkRepository {
  static async getFoodDrinkInfo(id) {
    return await FoodDrink.findByPk(id);
  }

  static async updateFoodDrink({ id, image }) {
    await FoodDrink.update({ image: image }, { where: { id } });
    return await FoodDrink.findByPk(id);
  }
}



module.exports = FoodDrinkRepository;