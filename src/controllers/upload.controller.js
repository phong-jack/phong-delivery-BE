const { SuccessResponse, OK } = require("../core/success.response");
const UploadService = require("../services/upload.service");

class UploadController {
  async uploadOneFile(req, res) {
    new OK({
      message: "Upload Success!",
      metadata: await UploadService.uploadOneFile({ file: req.file }),
    }).send(res);
  }
}

module.exports = new UploadController();
