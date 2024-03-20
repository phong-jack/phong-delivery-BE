const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/mysql.connect');
const MODEL_NAME = 'Location';



class Location extends Model {}
Location.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    timestamps: false
});
module.exports = Location;