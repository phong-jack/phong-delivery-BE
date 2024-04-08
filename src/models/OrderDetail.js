const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/mysql.connect');
const Location = require('./Location');
const MODEL_NAME = 'Order_Detail';

const Food_Drink = require('./FoodDrink');
const Order = require('./Order');

class OrderDetail extends Model {}
OrderDetail.init({
    detailId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Order,
            key: "orderId"
        }
    },
    foodDrinkId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Food_Drink,
            key: "id"
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            grateThanZeroValue(value) {
                if (value <= 0) {
                    throw new Error("Quantity must be greater than 0!");
                }
            }
        }
    },
}, {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    timestamps: false
});

module.exports = OrderDetail;