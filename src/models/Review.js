const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/mysql.connect');
const MODEL_NAME = 'Review';

const User = require('./User');
const Shop = require('./Shop');

class Review extends Model {}
Review.init({
    reviewId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    shopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Shop,
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    rating: {
        type: DataTypes.INTEGER,
        validate: {
            ratingRange(value) {
                if (value < 1 || value > 5) {
                    throw new Error("rating must be from 1 to 5 star");
                }
            }
        }
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    timestamps: false
});
module.exports = Review;