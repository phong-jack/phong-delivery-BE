'use strict';
/** @type {import('sequelize-cli').Migration} */

const CATEGORY_CONST = {
    DO_AN: 1,
    DO_UONG: 2,
    DO_CHAY: 3,
    BANH_KEM: 4,
    TRANG_MIENG: 5,
    HOMEMADE: 6,
    VIA_HE: 7,
    PIZZA_BURGER: 8,
    CHICKEN: 9,
    MON_LAU: 10,
    SUSHI: 11,
    MI_PHO: 12,
    COM_HOP: 13
};

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('category',
            [
                {
                    id: 1,
                    name: "Đồ ăn",
                    description: "Đồ ăn"
                },
                {
                    id: 2,
                    name: "Đồ uống",
                    description: "Đồ uống"
                },
                {
                    id: 3,
                    name: "Đồ chay",
                    description: "Đồ chay"
                },
                {
                    id: 4,
                    name: "Bánh kem",
                    description: "Bánh kem"
                },
                {
                    id: 5,
                    name: "Tráng miệng",
                    description: "Tráng miệng"
                },
                {
                    id: 6,
                    name: "Homemade",
                    description: "Homemade"
                },
                {
                    id: 7,
                    name: "Vỉa hè",
                    description: "Vỉa hè"
                },
                {
                    id: 8,
                    name: "Pizza/Burger",
                    description: "Pizza/Burger"
                },
                {
                    id: 9,
                    name: "Món gà",
                    description: "Món gà"
                },
                {
                    id: 10,
                    name: "Món lẩu",
                    description: "Món lẩu"
                },
                {
                    id: 11,
                    name: "Sushi",
                    description: "Sushi"
                },
                {
                    id: 12,
                    name: "Mì phở",
                    description: "Mì phở"
                },
                {
                    id: 13,
                    name: "Cơm hộp",
                    description: "Cơm hộp"
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
        queryInterface.bulkDelete('category', null, {});
    }
};
