const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/mysql.connect');
const MODEL_NAME = 'Invoice';

const User = require('./User');
const Shop = require('./Shop');
const OrderStatus = require('./OrderStatus');

class Invoice extends Model {}
Invoice.init({
    invoiceId: {
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
        }
    },
}, {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    timestamps: true
});
module.exports = Invoice;