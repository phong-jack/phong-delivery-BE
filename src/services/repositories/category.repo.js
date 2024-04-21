const { Category } = require("../../models");

class CategoryRepository {
  static async findByPk(categoryId) {
    const category = await Category.findByPk(categoryId, { raw: true });
    if (!category) return null;
    return category;
  }
}

module.exports = CategoryRepository;
