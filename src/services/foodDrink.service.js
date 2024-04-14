const { BadRequestError, ForbiddenError } = require("../core/error.response");
const FoodDrink = require("../models/FoodDrink");
const UploadService = require("./upload.service");
const FoodDrinkRepository = require("./repositories/foodDrink.repo");



class FoodDrinkService {
  static getFoodDrinkByShop = async (shopId) => {
    return await FoodDrink.findAll({
      where: {
        shopId
      }
    });
  };

  static createNewFoodDrink = async (
    { name, description, price, categoryId, shopId }) => {

    const existFoodDrink = await FoodDrink.findOne({
      name, categoryId, shopId
    });
    if (existFoodDrink) {
      throw new BadRequestError("this food/drink already exist!");
    }
    const newFoodDrink = await FoodDrink.create({
      name, description, price, categoryId, shopId
    });

    return newFoodDrink;
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

  static updateFoodDrink = async ({ id, shopId, name, description, price, image }) => {
    const foundFoodDrink = await FoodDrink.findByPk(id);
    if (!foundFoodDrink) throw new BadRequestError("Food drink not found!");
    const isValidShop = foundFoodDrink.shopId === shopId;
    if (!isValidShop) throw new ForbiddenError("You have not permission to change this food drink!");

    const updateData = {};
    if (name !== undefined) {
      updateData.name = name;
    }
    if (description !== undefined) {
      updateData.description = description;
    }
    if (price !== undefined) {
      updateData.price = price;
    }
    if (image !== undefined) {
      updateData.image = image;
    }

    const result = await FoodDrink.update(updateData, {
      where: { id: id }
    });
    return result;
  };

  static deleteFoodDrink = async (foodDrinkId) => {
    return await FoodDrink.destroy({
      where: {
        id: foodDrinkId
      }
    });
  };

  static uploadFoodDrinkImage = async ({ id, image }) => {
    const folderName = "FoodDrink";
    const { url } = await UploadService.uploadOneFile({ file: image, folderName });
    return await FoodDrinkRepository.updateFoodDrink({ id, image: url });
  };
}



module.exports = FoodDrinkService;