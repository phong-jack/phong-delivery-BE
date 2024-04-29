const JWT = require("jsonwebtoken");
const { AuthFailError, ForbiddenError } = require("../core/error.response");
const { authConst, HEADERS } = require("../constant");
const { asyncHandler } = require("../helpers");
const KeyTokenSerivce = require("../services/keyToken.service");

const verifyToken = asyncHandler(async (req, res, next) => {
  const accessToken = req.headers[HEADERS.ACCESS_TOKEN];
  if (!accessToken) {
    throw new AuthFailError("You aren't login!");
  }
  try {
    const decodeUser = await JWT.verify(accessToken, authConst.JWT_ACCESSKEY);
    const keyStore = await KeyTokenSerivce.findByUserId(decodeUser.id);
    console.log(decodeUser);
    req.user = decodeUser;
    req.keyStore = keyStore;
    next();
  } catch (error) {
    next(error);
  }
});

//check shop
const checkShopPermisson = (req, res, next) => {
  const isShop = req.user.isShop;
  if (!isShop) {
    throw new ForbiddenError("You don't have shop permisson!");
  }
  next();
};

module.exports = {
  verifyToken,
  checkShopPermisson,
};
