const { Sequelize, Model, DataTypes, TIME, DATE, NOW } = require('sequelize');
const sequelize = require('../db/mysql.connect');
const moment = require('moment');
const MODEL_NAME = 'User';



class User extends Model {}
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            min: 6,
            max: 30
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fullName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            min: 6,
            max: 50
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    isShop: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    shopId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    freezeTableName: true,
    timestamps: true,
    updatedAt: false
});
module.exports = User;