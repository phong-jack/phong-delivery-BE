const User = require("../../models/User");

class UserRepository {
  static async findById({ id }) {
    if (!id) return null;
    const user = await User.findOne({ where: { id }, raw: true });
    return user;
  }
  static async update({ id, fullName, email, image, phone, address }) {
    await User.update(
      { fullName, email, image, phone, address },
      { where: { id } }
    );
    return await User.findOne({ where: { id } });
  }
}

module.exports = UserRepository;
