const { SuccessResponse, OK } = require("../core/success.response");
const ShopService = require("../services/shop.service");



class ShopController {
  async getAllShop(req, res) {
    new OK({
      message: "Get all shop success!",
      metadata: await ShopService.findAllShop()
    }).send(res);
  }
}



module.exports = new ShopController();