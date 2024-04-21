const { SuccessResponse, OK } = require("../core/success.response");
const ShopService = require("../services/shop.service");

class ShopController {
  async getAllShop(req, res) {
    new OK({
      message: "Get all shop success!",
      metadata: await ShopService.findAllShop(),
    }).send(res);
  }

  async getShopsPaginate(req, res) {
    new OK({
      message: "Get shops success!",
      metadata: await ShopService.findShopPaginate({
        page: req.query.page,
        perPage: req.query.per_page,
      }),
    }).send(res);
  }

  async getShopDetail(req, res) {
    new OK({
      message: "Get shop detail success!",
      metadata: await ShopService.getShopDetail({ shopId: req.params.id }),
    }).send(res);
  }

  async getShopCategory(req, res) {
    new OK({
      message: "Get shop categories!",
      metadata: await ShopService.getShopCategory({ shopId: req.params.id }),
    }).send(res);
  }

  async getShopFoodDrink(req, res) {
    new OK({
      message: "Get shop food drink sucess!!",
      metadata: await ShopService.getShopFoodDrink({ shopId: req.params.id }),
    }).send(res);
  }
}

module.exports = new ShopController();
