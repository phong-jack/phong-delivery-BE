const { BadRequestError } = require("../core/error.response");
const KeyToken = require("../models/KeyToken");

class KeyTokenSerivce {
  static createKeyToken = async ({ userId, refreshToken }) => {
    let foundTokens = await KeyToken.findOne({ where: { userId }, raw: true });
    if (!foundTokens) {
      const { dataValues: tokens } = await KeyToken.create({
        userId,
        refreshToken,
      });

      return tokens;
    }
    await KeyToken.update({ refreshToken }, { where: { userId } });
    foundTokens = await KeyToken.findOne({ where: { userId } });
    return foundTokens;
  };

  static findByUserId = async (userId) => {
    return await KeyToken.findOne({ where: { userId } });
  };

  static removeKeyById = async (id) => {
    return await KeyToken.destroy({ where: { id } });
  };
}

module.exports = KeyTokenSerivce;
