const { HEADERS, PARAMS } = require("../constant");
const { SuccessResponse, OK, CREATED } = require("../core/success.response");
const AccessService = require("../services/access.service");

class AccessController {
  login = async (req, res) => {
    new SuccessResponse({
      message: "Login Success!",
      metadata: await AccessService.login({ ...req.body, res }),
    }).send(res);
  };

  register = async (req, res) => {
    new CREATED({
      message: "Registered!!",
      metadata: await AccessService.register({ ...req.body }),
    }).send(res);
  };

  logout = async (req, res) => {
    new OK({
      message: "Logout success!",
      metadata: await AccessService.logout(req.keyStore),
    }).send(res);
  };

  requestRefreshToken = async (req, res) => {
    new OK({
      message: "Refreshed token !!",
      metadata: await AccessService.requestRefreshToken({
        refreshToken: req.headers[HEADERS.REFRESH_TOKEN],
        res,
      }),
    }).send(res);
  };

  verifyUser = async (req, res) => {
    new OK({
      message: "Verify mail ok!",
      metadata: await AccessService.verifyUser(req.query[PARAMS.ACCESS_TOKEN]),
    }).send(res);
  };

  sendVerifyRequest = async (req, res) => {
    new OK({
      message: "Email sent!",
      metadata: await AccessService.sendVerifyRequest({
        accessToken: req.headers[HEADERS.ACCESS_TOKEN],
        email: req.body.email,
      }),
    }).send(res);
  };

  changePassword = async (req, res) => {
    new OK({
      message: "Change password success!",
      metadata: await AccessService.changePassword({
        id: req.params.id,
        ...req.body,
      }),
    }).send(res);
  };
}

module.exports = new AccessController();
