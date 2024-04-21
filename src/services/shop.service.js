const Shop = require("../models/Shop");
const CategoryRepository = require("./repositories/category.repo");
const FoodDrinkRepository = require("./repositories/foodDrink.repo");
const ShopRepository = require("./repositories/shop.repo");

class ShopService {
  static async findAllShop() {
    return await ShopRepository.findAll();
  }

  static async findShopPaginate({ page, perPage = 16 }) {
    console.log("check page at service :: ", page);
    const result = await ShopRepository.findShopPaginate({ page, perPage });
    return result;
  }

  static async getShopDetail({ shopId }) {
    return await ShopRepository.findById(shopId);
  }

  //OK
  static async getShopCategory({ shopId }) {
    let categorieIds = [];
    const foodDrinks = await FoodDrinkRepository.findFoodDrinkByShop({
      shopId,
    });
    foodDrinks.forEach((foodDrink) => {
      if (!categorieIds.includes(foodDrink.categoryId)) {
        categorieIds.push(foodDrink.categoryId);
      }
    });
    let results = await Promise.all(
      categorieIds.map(async (id) => {
        return await CategoryRepository.findByPk(id);
      })
    );
    return results;
  }

  static async getShopFoodDrink({ shopId }) {
    return await FoodDrinkRepository.findFoodDrinkByShop({ shopId });
  }
}

module.exports = ShopService;
