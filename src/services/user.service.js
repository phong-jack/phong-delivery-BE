const UserRepository = require("./repositories/user.repo");

class UserService {
  static async updateUserInfo({ id, fullName, email, image, phone, address }) {
    console.log("CHeck email", email);
    return await UserRepository.update({
      id,
      fullName,
      email,
      image,
      phone,
      address,
    });
  }

  static async getUserInfo({ id }) {
    return await UserRepository.findById({ id });
  }
}

module.exports = UserService;
