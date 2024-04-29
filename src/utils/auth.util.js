const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const { authConst } = require("../constant");

async function hashPassword(password) {
  return await bcrypt.hash(password, authConst.PASSWORD_SALT);
}

async function comparePassword(password, passwordCheck) {
  return bcrypt.compareSync(password, passwordCheck);
}

function generateAccessToken(payload) {
  const tokenPayload = { ...payload };
  if (tokenPayload.exp) {
    delete tokenPayload.exp;
  }
  if (tokenPayload.iat) {
    delete tokenPayload.iat;
  }
  return JWT.sign(tokenPayload, authConst.JWT_ACCESSKEY, {
    expiresIn: "30 mins",
  });
}

function generateRefreshToken(payload) {
  const tokenPayload = { ...payload };
  if (tokenPayload.exp) {
    delete tokenPayload.exp;
  }
  if (tokenPayload.iat) {
    delete tokenPayload.iat;
  }
  return JWT.sign(tokenPayload, authConst.JWT_REFRESHKEY, {
    expiresIn: "7 days",
  });
}

module.exports = {
  hashPassword,
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
};
