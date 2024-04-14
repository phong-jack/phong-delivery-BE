const multerConfig = require("../config/multer.config");


const uploadSingle = (fieldName) => {
  return multerConfig.single(fieldName);
};


module.exports = { uploadSingle };