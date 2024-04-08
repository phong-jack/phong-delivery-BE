const { SuccessResponse, OK } = require("../core/success.response");
const FoodDrinkService = require("../services/foodDrink.service");


class FoodDrinkControler {
    async getFoodDrinkByShop(req, res) {
        new SuccessResponse({
            message: "Get all product sucess!",
            metadata: await FoodDrinkService.getFoodDrinkByShop(req.user.shopId)
        }).send(res);
    }
    async getFoodDrinkByShopFromClient(req, res) {
        new SuccessResponse({
            message: "Get all product sucess!",
            metadata: await FoodDrinkService.getFoodDrinkByShop(req.params.shopId)
        }).send(res);
    }
    async createNewFoodDrink(req, res) {
        new OK({
            message: "Created new product!",
            metadata: await FoodDrinkService.createNewFoodDrink({
                shopId: req.user.shopId, ...req.body
            })
        }).send(res);
    }
    async toggleFoodDrinkStatus(req, res) {
        new SuccessResponse({
            message: "Change food drink status ok!",
            metadata: await FoodDrinkService.toggleFoodDrinkStatus(req.body.foodDrinkId)
        }).send(res);
    }
}



module.exports = new FoodDrinkControler();