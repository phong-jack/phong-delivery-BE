const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/mysql.connect");
const User = require("./User");
const MODEL_NAME = "KeyToken";

class KeyToken extends Model {}
KeyToken.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    refreshToken: {
      type: DataTypes.STRING(1024),
    },
  },
  {
    sequelize: sequelize,
    modelName: MODEL_NAME,
    timestamps: true,
  }
);

module.exports = KeyToken;
