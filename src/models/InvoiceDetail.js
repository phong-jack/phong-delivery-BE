const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/mysql.connect');
const Location = require('./Location');
const MODEL_NAME = 'Invoice_Detail';

const Food_Drink = require('./FoodDrink');
const Invoice = require('./Invoice');

class InvoiceDetail extends Model {}
InvoiceDetail.init({
    detailId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    invoiceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Invoice,
            key: "invoiceId"
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

module.exports = InvoiceDetail;