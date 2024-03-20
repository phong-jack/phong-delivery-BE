const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/mysql.connect');
const MODEL_NAME = 'Food_Drink';
const Category = require('./Category');



class FoodDrink extends Model {}
FoodDrink.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        defaultValue: ""
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: "id"
        }
    }
}, {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    timestamps: true
});
module.exports = FoodDrink;