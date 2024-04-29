const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../db/mysql.connect");
const MODEL_NAME = "Order";

const User = require("./User");
const Shop = require("./Shop");
const OrderStatus = require("./OrderStatus");
const { ORDER_STATUS, PAYMENT_METHOD } = require("../constant");

class Order extends Model {}
Order.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
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
    totalAmout: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    statusCode: {
      type: DataTypes.INTEGER,
      references: {
        model: OrderStatus,
        key: "statusCode",
      },
      defaultValue: ORDER_STATUS.INIT,
    },
    paymentMethod: {
      type: DataTypes.ENUM(PAYMENT_METHOD.COD, PAYMENT_METHOD.VNPAY),
      defaultValue: PAYMENT_METHOD.COD,
    },
  },
  {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    timestamps: true,
  }
);

module.exports = Order;
