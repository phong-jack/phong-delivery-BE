const { BadRequestError } = require('../core/error.response');
const Category = require('../models/Category');

class CategoryService {
    static findAllCategory = async () => {
        return await Category.findAll();
    };
    static createNewCategory = async ({ name, descrtiption }) => {
        const categoryExist = await Category.findOne({
            where: {
                name
            }
        });
        if (categoryExist) {
            throw new BadRequestError("Category already exist!");
        }
        const newCategory = await Category.create({ name, descrtiption });
        return {
            newCategory
        };
    };
}


module.exports = CategoryService;