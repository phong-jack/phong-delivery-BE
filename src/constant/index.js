const authConst = {
  PASSWORD_SALT: 10,
  JWT_ACCESSKEY: "accesstoken",
  JWT_REFRESHKEY: "refreshtoken",
};

const PARAMS = {
  ACCESS_TOKEN: "accesstoken",
  REFRESH_TOKEN: "refreshtoken",
};

const HEADERS = {
  ACCESS_TOKEN: "accesstoken",
  REFRESH_TOKEN: "refreshtoken",
};

const ORDER_STATUS = {
  INIT: 0,
  ACCEPTED: 1,
  SHIPPING: 2,
  FINISHED: 3,
  CANCEL: 4,
  REJECTED: 5,
};

const PAYMENT_METHOD = {
  COD: "COD",
  VNPAY: "VNPAY",
};

module.exports = {
  authConst,
  PARAMS,
  HEADERS,
  ORDER_STATUS,
  PAYMENT_METHOD,
};
