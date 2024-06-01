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
        query: req.query.q,
        page: req.query.page,
        perPage: req.query.per_page,
      }),
    }).send(res);
  }

  async findShopByQueryPaginate(req, res) {
    new OK({
      message: "Get shops success!",
      metadata: await ShopService.findShopByQueryPaginate({
        query: req.query.q,
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

  async toggleShopStatus(req, res) {
    new OK({
      message: "Change shop status oke!",
      metadata: await ShopService.toggleShopStatus({
        shopId: req.params.id,
        isWorking: req.body.isWorking,
      }),
    }).send(res);
  }

  async updateShop(req, res) {
    new OK({
      message: "Updated shop!",
      metadata: await ShopService.updateShop({
        id: req.params.id,
        ...req.body,
      }),
    }).send(res);
  }

  async findShopByDistance(req, res) {
    new OK({
      message: "Get shop by distance oke!",
      metadata: await ShopService.findShopByDistance(
        req.user.id,
        req.query.page,
        req.query.limit
      ),
    }).send(res);
  }
}

module.exports = new ShopController();
