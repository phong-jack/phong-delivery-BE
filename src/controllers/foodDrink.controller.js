const { SuccessResponse, OK, CREATED } = require("../core/success.response");
const FoodDrinkService = require("../services/foodDrink.service");

class FoodDrinkControler {
  async getFoodDrinkByShop(req, res) {
    new SuccessResponse({
      message: "Get all product sucess!",
      metadata: await FoodDrinkService.getFoodDrinkByShop(req.user.shopId),
    }).send(res);
  }
  async getFoodDrinkByShopFromClient(req, res) {
    new SuccessResponse({
      message: "Get all product sucess!",
      metadata: await FoodDrinkService.getFoodDrinkByShop(req.params.shopId),
    }).send(res);
  }

  async getFoodDrinkInfo(req, res) {
    new OK({
      message: "Get food drink info sucess!",
      metadata: await FoodDrinkService.getFoodDrinkInfo(req.params.id),
    }).send(res);
  }

  async createNewFoodDrink(req, res) {
    new CREATED({
      message: "Created new product!",
      metadata: await FoodDrinkService.createNewFoodDrink({
        ...req.body,
      }),
    }).send(res);
  }
  async toggleFoodDrinkStatus(req, res) {
    new SuccessResponse({
      message: "Change food drink status ok!",
      metadata: await FoodDrinkService.toggleFoodDrinkStatus({
        foodDrinkId: req.params.id,
        isAvailable: req.body.isAvailable,
      }),
    }).send(res);
  }
  async updateFoodDrink(req, res) {
    new SuccessResponse({
      message: "Update food drink success!",
      metadata: await FoodDrinkService.updateFoodDrink({
        id: req.params.id,
        shopId: req.user.shopId,
        ...req.body,
      }),
    }).send(res);
  }

  async uploadFoodDrinkImage(req, res) {
    new OK({
      message: "Update food drink image success!",
      metadata: await FoodDrinkService.uploadFoodDrinkImage({
        id: req.params.id,
        image: req.file,
      }),
    }).send(res);
  }

  async getFoodDrinkByShopPaginate(req, res) {
    new OK({
      message: "Get food drink image success!",
      metadata: await FoodDrinkService.findFoodDrinkByShopPaginate({
        shopId: req.params.id,
        page: req.query.page,
        perPage: req.query.per_page,
      }),
    }).send(res);
  }

  async deleteFoodDrink(req, res) {
    new OK({
      message: "Delete food drink success!",
      metadata: await FoodDrinkService.deleteFoodDrink(req.params.id),
    }).send(res);
  }
}

module.exports = new FoodDrinkControler();
