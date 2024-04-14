const cloudinaryV2 = require("../config/cloudinary.config");

class UploadService {
  static async uploadOneFile({ file, folderName }) {
    const result = await cloudinaryV2.uploader.upload(file.path, {
      overwrite: true,
      folder: folderName,
    });
    return result;
  }
}

module.exports = UploadService;
