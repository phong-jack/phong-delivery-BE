const { authConst } = require("../constant");
const { AuthFailError, BadRequestError, ForbiddenError } = require("../core/error.response");
const User = require("../models/User");
const { comparePassword, generateAccessToken, generateRefreshToken, hashPassword } = require("../utils/auth.util");
const { pickAnObject, sendMail } = require("../utils/func.util");
const JWT = require('jsonwebtoken');
const KeyTokenSerivce = require("./keyToken.service");
const KeyToken = require("../models/KeyToken");

class AccessService {

    static async login({ username, password, res }) {
        if (!username || !password) {
            throw new BadRequestError("You must enter username or password!");
        }
        const user = await User.findOne({
            where: { username: username },
            raw: true
        });
        if (!user) {
            throw new AuthFailError("Wrong username!");
        }
        const validPassword = comparePassword(password, user.password);
        if (!validPassword) {
            throw new AuthFailError("Wrong password!");
        }
        const userInfo = pickAnObject(user,
            ['id', 'username', 'fullName', 'email', 'phone', 'address', 'isShop', 'isActive', 'shopId']);

        const { id: userId } = userInfo;
        const accessToken = generateAccessToken(userInfo);
        const refreshToken = generateRefreshToken(userInfo);

        await KeyTokenSerivce.createKeyToken({ userId, refreshToken });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: false,
            path: "/",
            sameSite: "strict"
        });

        return {
            userInfo,
            token: {
                accessToken, refreshToken
            }
        };
    }
    //register
    static async register({ username, password, fullName, email, phone }) {
        if (!username || !password || !fullName || !email || !phone) {
            throw new BadRequestError("You must enter full information!!");
        }
        const hashPass = await hashPassword(password);
        const user = await User.findOne({
            where: {
                username
            }
        });
        if (user) {
            throw new BadRequestError("username already exist!!");
        }
        const userByEmail = await User.findOne({ where: { email } });
        if (userByEmail) {
            throw new BadRequestError("Email already exist!!");
        }

        const newUser = await User.create({
            username, password: hashPass, fullName, email, phone
        });
        return {
            newUser
        };
    }

    /**
     * 1. Kiểm tra nếu không có frefresh token thì chưa đăng nhập
     * 2. Nếu tìm không ra refresh token thì token này không hợp lệ
     * 3. Verify token để lấy thông tin user
     * 4. Tạo user mới dựa vào thông tin  user cũ (Đã xóa iat, exp) vì token mới không được trùng token cũ
     * 5. Update trong database và lưu lại coookie
     * 6. trả về access token mới!
     */

    static async requestRefreshToken({ refreshToken, res }) {
        if (!refreshToken) {
            throw new AuthFailError("You are not authenticate!");
        }
        const refreshTokenFound = await KeyToken.findOne({ where: { refreshToken } });
        if (!refreshTokenFound) throw new ForbiddenError("Token is not valid!");

        const user = await JWT.verify(refreshToken, authConst.JWT_REFRESHKEY);
        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: false,
            path: "/",
            sameSite: "strict"
        });
        await KeyToken.update({ refreshToken: newRefreshToken }, { where: { refreshToken } });
        return {
            accessToken: newAccessToken
        };
    }

    static async logout(keyStore) {
        const deleteKey = await KeyTokenSerivce.removeKeyById(keyStore.id);
        return deleteKey;
    }

    static async verifyUser(accessToken) {
        const decode = await JWT.verify(accessToken, authConst.JWT_ACCESSKEY);
        const { id } = decode;
        return await User.update({ isActive: true }, { where: { id } });
    }

    static async sendVerifyRequest(accessToken) {
        const subject = `Mail xác thực tài khoản của bạn`;
        const verifyLink = `http://localhost:3055/api/v1/verifyUser?accesstoken=${accessToken}`;
        const decode = await JWT.verify(accessToken, authConst.JWT_ACCESSKEY);
        const { email } = decode;
        return await sendMail(email, subject, `Link xac thuc tai khoan: <a href=${verifyLink}>${verifyLink}<a/>`);
    };
}



module.exports = AccessService;