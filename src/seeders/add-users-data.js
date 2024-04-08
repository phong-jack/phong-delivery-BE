'use strict';
const { hashPassword } = require('../utils/auth.util');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        await queryInterface.bulkInsert('user',
            [
                {
                    username: "phongpro5141",
                    password: await hashPassword("123456"),
                    fullName: "Ngô Tiến Phong",
                    email: "ngotienphong@gmail.com",
                    phone: "0123456789",
                    address: "44 Trần Thúc Nhẫn",
                    createdAt: new Date()
                },
                {
                    username: "accoutdat09",
                    password: await hashPassword("123456789"),
                    fullName: "Nguyễn Tiến Đạt",
                    email: "nguyentiendat3@gmail.com",
                    phone: "",
                    address: "44 Nguyễn Huệ",
                    createdAt: new Date()
                },
                {
                    username: "nguyendangkyquang",
                    password: await hashPassword("123454"),
                    fullName: "Nguyễn Đăng Kỳ Quang",
                    email: "nguyendangkyquang@gmail.com",
                    phone: "",
                    address: "315 Đặng Tất",
                    createdAt: new Date()
                },
                {
                    username: "thanlong51",
                    password: await hashPassword("123456"),
                    fullName: "Ngô Thanh Long",
                    email: "thanong51g@gmail.com",
                    phone: "",
                    address: "32 Nguyễn Trãi",
                    createdAt: new Date()
                },
                {
                    username: "nguyenductuyen",
                    password: await hashPassword("123456"),
                    fullName: "Nguyễn Đức Tuyến",
                    email: "nguyenductuyen@gmail.com",
                    phone: "",
                    address: "49 Nguyễn Huệ",
                    createdAt: new Date()
                },
                {
                    username: "levanlam55",
                    password: await hashPassword("123456"),
                    fullName: "Lê Văn Lâm",
                    email: "levanlam55@gmail.com",
                    phone: "",
                    address: "33 Lê Thánh Tôn",
                    createdAt: new Date()
                },
                {
                    username: "hottohbt",
                    password: await hashPassword("123456"),
                    fullName: "Hotto",
                    email: "hottoHbt@gmail.com",
                    phone: "",
                    address: "34 Hai Bà Trưng, P. Vĩnh Ninh, Tp. Huế, Huế",
                    isShop: true,
                    shopId: 11,
                    createdAt: new Date()
                },
                {
                    username: "1985bbq",
                    password: await hashPassword("123456"),
                    fullName: "1985BBQ",
                    email: "1985bbq@gmail.com",
                    phone: "",
                    address: "2 Bà Triệu, P. Phú Hội, Tp. Huế, Huế",
                    isShop: true,
                    shopId: 1,
                    createdAt: new Date()
                },
            ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        queryInterface.bulkDelete('user', null, {});
    }
};
