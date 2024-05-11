const { BadRequestError } = require("../core/error.response");
const Shop = require("../models/Shop");
const CategoryRepository = require("./repositories/category.repo");
const FoodDrinkRepository = require("./repositories/foodDrink.repo");
const ShopRepository = require("./repositories/shop.repo");

class ShopService {
  static async findAllShop() {
    return await ShopRepository.findAll();
  }

  static async findShopPaginate({ query, page = 1, perPage = 16 }) {
    const result = await ShopRepository.findShopPaginate({
      query: {},
      page,
      perPage,
    });
    return result;
  }

  static async findShopByQueryPaginate({ query = "", page = 1, perPage = 16 }) {
    const result = await ShopRepository.findShopByQueryPaginate({
      query,
      page,
      perPage,
    });
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

  static async toggleShopStatus({ shopId, isWorking }) {
    if (isWorking === undefined)
      throw new BadRequestError("Missing is working param");

    const result = await ShopRepository.updateStatus({ id: shopId, isWorking });
    if (+result === 0) throw Error("No thing can be change!");
    return result;
  }
}

module.exports = ShopService;
