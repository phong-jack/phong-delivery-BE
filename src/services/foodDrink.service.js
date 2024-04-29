const { BadRequestError, ForbiddenError } = require("../core/error.response");
const FoodDrink = require("../models/FoodDrink");
const UploadService = require("./upload.service");
const FoodDrinkRepository = require("./repositories/foodDrink.repo");

class FoodDrinkService {
  static getFoodDrinkByShop = async (shopId) => {
    return await FoodDrink.findAll({
      where: {
        shopId,
      },
    });
  };

  static createNewFoodDrink = async ({
    name,
    description,
    price,
    categoryId,
    shopId,
    image,
  }) => {
    const existFoodDrink = await FoodDrink.findOne({
      where: { name, categoryId, shopId },
      raw: true,
    });
    if (existFoodDrink) {
      throw new BadRequestError("this food/drink already exist!");
    }
    const newFoodDrink = await FoodDrink.create({
      name,
      description,
      price,
      categoryId,
      shopId,
      image,
    });

    return newFoodDrink;
  };

  static toggleFoodDrinkStatus = async ({ foodDrinkId, isAvailable }) => {
    const foodDrink = await FoodDrink.findByPk(foodDrinkId, { raw: true });
    if (!foodDrink) {
      throw new BadRequestError("Food or drink not found!!");
    }
    console.log(foodDrink);
    //Cap nhat trang thai moi!
    await FoodDrink.update(
      { isAvailable: isAvailable },
      {
        where: {
          id: foodDrinkId,
        },
      }
    );

    return {
      isAvailable,
    };
  };

  static updateFoodDrink = async ({
    id,
    shopId,
    name,
    description,
    price,
    image,
  }) => {
    const foundFoodDrink = await FoodDrink.findByPk(id);
    if (!foundFoodDrink) throw new BadRequestError("Food drink not found!");
    const isValidShop = foundFoodDrink.shopId === shopId;
    if (!isValidShop)
      throw new ForbiddenError(
        "You have not permission to change this food drink!"
      );
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
      where: { id: id },
    });
    if (result == 0) throw new BadRequestError("No things change!");

    return result;
  };

  static deleteFoodDrink = async (foodDrinkId) => {
    const foodDrink = await FoodDrinkRepository.getFoodDrinkInfo(foodDrinkId);
    if (!foodDrink) throw new BadRequestError("This food drink not found!");
    return await FoodDrink.destroy({
      where: {
        id: foodDrinkId,
      },
    });
  };

  static uploadFoodDrinkImage = async ({ id, image }) => {
    const folderName = "FoodDrink";
    const { url } = await UploadService.uploadOneFile({
      file: image,
      folderName,
    });
    return await FoodDrinkRepository.updateFoodDrink({ id, image: url });
  };

  static getFoodDrinkInfo = async (id) => {
    const foodDrink = await FoodDrinkRepository.getFoodDrinkInfo(id);
    if (!foodDrink) throw new BadRequestError("This food drink not found!");
    return foodDrink;
  };

  static calculatorFoodDrink = async ({ id, quantity }) => {
    const foodDrink = await FoodDrinkRepository.getFoodDrinkInfo(id);
    if (!foodDrink) throw new BadRequestError("Food drink not found!");
    return Number(foodDrink.price * quantity);
  };

  static async findFoodDrinkByShopPaginate({ shopId, page = 1, perPage = 15 }) {
    const foodDrinks = FoodDrinkRepository.findFoodDrinkByShopPaginate({
      shopId,
      page,
      perPage,
    });

    return foodDrinks;
  }
}

module.exports = FoodDrinkService;
