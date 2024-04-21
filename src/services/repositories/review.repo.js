const Review = require("../../models/Review");

class ReviewRepository {
  static async findByShop({ shopId }) {
    return await Review.findAll({
      where: {
        shopId: shopId,
      },
    });
  }

  static async create({ userId, shopId, rating, comment }) {
    return await Review.create({
      userId,
      shopId,
      rating,
      comment,
    });
  }
}

module.exports = ReviewRepository;
