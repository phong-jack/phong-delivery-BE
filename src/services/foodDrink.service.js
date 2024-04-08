const { BadRequestError } = require("../core/error.response");
const FoodDrink = require("../models/FoodDrink");



class FoodDrinkService {
    static getFoodDrinkByShop = async (shopId) => {
        return await FoodDrink.findAll({
            where: {
                shopId
            }
        });
    };
    static createNewFoodDrink = async (
        { name, description, price, image, categoryId, shopId }) => {

        const existFoodDrink = await FoodDrink.findOne({
            name, categoryId, shopId
        });
        if (existFoodDrink) {
            throw new BadRequestError("this food/drink already exist!");
        }
        const newFoodDrink = await FoodDrink.create({
            name, description, price, image, categoryId, shopId
        });

        return {
            newFoodDrink
        };
    };

    static toggleFoodDrinkStatus = async (foodDrinkId) => {
        const foodDrink = await FoodDrink.findByPk(foodDrinkId);
        if (!foodDrink) {
            throw new BadRequestError("Food or drink not found!!");
        }
        const newStatus = !foodDrink.isAvailable;
        //Cap nhat trang thai moi!
        await FoodDrink.update({ isAvailable: newStatus }, {
            where: {
                id: foodDrink
            }
        });

        return {
            newStatus
        };
    };
    static changeFoodDrinkPrice = async ({ id, price }) => {
        return await FoodDrink.update({ price }, {
            where: {
                id
            }
        });
    };
    static deleteFoodDrink = async (foodDrinkId) => {
        return await FoodDrink.destroy({
            where: {
                id: foodDrinkId
            }
        });
    };
}



module.exports = FoodDrinkService;