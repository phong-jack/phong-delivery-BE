const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db/mysql.connect');
const moment = require('moment');
const MODEL_NAME = 'Order';



const User = require('./User');
const Shop = require('./Shop');
const OrderStatus = require('./OrderStatus');
const { ORDER_STATUS } = require('../constant');

class Order extends Model {}
Order.init({
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
            key: "id"
        }
    },
    shopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Shop,
            key: "id"
        }
    },
    totalAmout: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    statusCode: {
        type: DataTypes.INTEGER,
        references: {
            model: OrderStatus,
            key: "statusCode"
        },
        defaultValue: ORDER_STATUS.INIT
    },

}, {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    timestamps: true,
});
module.exports = Order;