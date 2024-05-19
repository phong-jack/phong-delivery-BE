const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/mysql.connect");
const MODEL_NAME = "Food_Drink";
const Category = require("./Category");
const Shop = require("./Shop");

const defaultImage =
  "https://mms.img.susercontent.com/vn-11134517-7r98o-lqn24i7chcfw9c@resize_ss120x120!@crop_w120_h120_cT";

class FoodDrink extends Model {}
FoodDrink.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: defaultImage,
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
    },
    shopId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Shop,
        key: "id",
      },
    },
  },
  {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    timestamps: true,
    paranoid: true,
    deletedAt: true,
  }
);

module.exports = FoodDrink;
