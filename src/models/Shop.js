const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/mysql.connect');
const Location = require('./Location');
const MODEL_NAME = 'Shop';



class Shop extends Model {}
Shop.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: ""
    },
    isWorking: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    locationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Location,
            key: 'id'
        }
    }
}, {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    timestamps: false
});
module.exports = Shop;