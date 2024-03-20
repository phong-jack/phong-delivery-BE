const bcrypt = require('bcrypt');
const { authConst } = require('../constant');

async function hashPassword(password) {
    return await bcrypt.hash(password, authConst.PASSWORD_SALT);
}





module.exports = {
    hashPassword
};
