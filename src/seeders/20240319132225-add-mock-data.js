'use strict';
const { hashPassword } = require('../utils/hashPassword');
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
                    phone: "",
                    address: "44 Trần Thúc Nhẫn",
                }
            ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
