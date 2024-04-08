'use strict';
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
        await queryInterface.bulkInsert('order_status',
            [
                {
                    statusCode: 0,
                    statusReason: "INIT",
                    statusDescription: "Đơn hàng vừa được tạo!"
                },
                {
                    statusCode: 1,
                    statusReason: "ACCEPTED",
                    statusDescription: "Đơn hàng đã được xác nhận!"
                },
                {
                    statusCode: 2,
                    statusReason: "SHIPPING",
                    statusDescription: "Đơn hàng đang được vận chuyển"
                },
                {
                    statusCode: 3,
                    statusReason: "FINISHED",
                    statusDescription: "Đơn hàng đã hoàn tất!"
                },
                {
                    statusCode: 4,
                    statusReason: "CANCLE",
                    statusDescription: "Đơn hàng đã bị hủy!"
                },
                {
                    statusCode: 5,
                    statusReason: "REJECTED",
                    statusDescription: "Đơn hàng đã bị từ chối!"
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
        await queryInterface.bulkDelete('order_status', null, {});
    }
};
