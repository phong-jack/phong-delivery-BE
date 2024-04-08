const express = require('express');
const { asyncHandler } = require('../../helpers');
const { login, register, verifyUser, sendVerifyRequest, logout, requestRefreshToken } = require('../../controllers/access.controller');
const { verifyToken } = require('../../auth/checkAuth');
const router = express.Router();

//khong can check token!
router.post('/login', asyncHandler(login));
router.post('/register', asyncHandler(register));
router.get('/verifyUser', asyncHandler(verifyUser));
router.post('/refresh', asyncHandler(requestRefreshToken));


//check token!
router.use(verifyToken);
router.post('/sendVerifyRequest', asyncHandler(sendVerifyRequest));
router.post('/logout', asyncHandler(logout));



module.exports = router;