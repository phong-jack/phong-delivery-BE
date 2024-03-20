const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/mysql.connect');
const MODEL_NAME = 'Category';



class Category extends Model {}
Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    timestamps: false,
});
module.exports = Category;