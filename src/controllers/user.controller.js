const { SuccessResponse, OK } = require("../core/success.response");
const UserService = require("../services/user.service");

class UserController {
  async updateProfile(req, res) {
    new OK({
      message: "Update user success!",
      metadata: await UserService.updateUserInfo(req.body),
    }).send(res);
  }

  async getUserProfile(req, res) {
    new OK({
      message: "Get user profile success!",
      metadata: await UserService.getUserInfo({ id: req.params.id }),
    }).send(res);
  }
}

module.exports = new UserController();
