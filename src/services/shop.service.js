const Shop = require("../models/Shop");

class ShopService {
  static async findAllShop() {
    return await Shop.findAll();
  }
}



module.exports = ShopService;