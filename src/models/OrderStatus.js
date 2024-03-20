const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/mysql.connect');
const MODEL_NAME = 'Order_Status';



class OrderStatus extends Model {}
OrderStatus.init({
    statusCode: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    statusDecription: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    timestamps: false
});
module.exports = OrderStatus;