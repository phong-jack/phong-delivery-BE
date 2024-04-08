const { SuccessResponse, OK } = require("../core/success.response");
const CategoryService = require("../services/category.service");



class CategoryController {
    async getAllCategory(req, res) {
        new SuccessResponse({
            message: "Get all categories!",
            metadata: await CategoryService.findAllCategory()
        }).send(res);
    }
    async createNewCategory(req, res) {
        new OK({
            message: "Create new category success!",
            metadata: await CategoryService.createNewCategory(req.body)
        }).send(res);
    }
}



module.exports = new CategoryController();