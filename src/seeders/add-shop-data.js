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
        await queryInterface.bulkInsert('shop',
            [
                {
                    id: 1,
                    name: "1985BBQ - 2 Bà Triệu (Nướng Lẩu-Ăn Vặt Và Trà Sữa)",
                    address: "2 Bà Triệu, P. Phú Hội, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g73/725143/prof/s640x400/foody-upload-api-foody-mobile-cu-ffd77575-220417130548.jpeg",
                },
                {
                    name: "Donald Trung - Bánh Ướt & Bánh Cuốn Thịt Heo",
                    address: "28 Hoàng Văn Thụ, P. An Đông, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g69/681408/prof/s640x400/foody-upload-api-foody-mobile-img_2952-190327151015.jpg",
                },
                {
                    name: "Gà rán và Mì Ý - Jollibee - Hùng Vương",
                    address: "Tầng 4, Tầng 4, Vincom Plaza, 50A Hùng Vương, P. Phú Nhuận, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g69/681408/prof/s640x400/foody-upload-api-foody-mobile-img_2952-190327151015.jpg",
                },
                {
                    name: "Kinh Bắc - Bún Đậu Mắm Tôm",
                    address: "6/16 Trường Chinh Tổ 2, P. Xuân Phú, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g4/32324/prof/s640x400/foody-upload-api-foody-mobile-22323434-210121141934.jpg",
                },
                {
                    name: "Đặc Sản Xứ Quảng - Mì Quảng & Bún Mắm",
                    address: "103/19 Nguyễn Trường Tộ, P. Vĩnh Ninh, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g79/786263/prof/s640x400/foody-upload-api-foody-mobile-foody-dac-san-xu-qua-181012084917.jpg",
                },
                {
                    name: "Nhà Cám - Bún Đậu Mắm Tôm - Nguyễn Lương Bằng",
                    address: "33 Nguyễn Lương Bằng, P. Phú Hội, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g88/870335/prof/s640x400/foody-upload-api-foody-mobile-foody-upload-api-foo-190820154516.jpg",
                },
                {
                    name: "Bếp Ở HẺM 34",
                    address: "7/34 Nguyễn Tri Phương, P. Phú Nhuận, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g109/1082398/prof/s640x400/file_restaurant_photo_gkga_16503-82e40e06-220419151800.jpg",
                },
                {
                    name: "Chân Gà Huyền Trang (GỐC) - Nguyễn Lộ Trạch",
                    address: "3 Kiệt 125A Nguyễn Lộ Trạch, P. Xuân Phú, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g94/933048/prof/s640x400/file_restaurant_photo_vkti_16809-4b34ccb7-230408171008.jpg",
                },
                {
                    name: "Chân Gà Huyền Trang ( Bà Trang GỐC) -39 Tố Hữu",
                    address: "39 Tố Hữu, P. Xuân Phú, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g115/1143332/prof/s640x400/foody-upload-api-foody-mobile-an-3d10ad84-230115185101.jpeg",
                },
                {
                    name: "Tiệm Ăn Vặt 1999",
                    address: "21 Kiệt 116 Bà Triệu, P. Phú Hội, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g105/1047551/prof/s640x400/foody-upload-api-foody-mobile-ca-770e507c-230605112256.jpg",
                },
                {
                    name: "HOTTO - Trà Sữa & Bánh Takoyaki - Hai Bà Trưng",
                    address: "34 Hai Bà Trưng, P. Vĩnh Ninh, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g30/291564/prof/s640x400/foody-upload-api-foody-mobile-co-ae39f7ed-230425105423.jpeg",
                },
                {
                    name: "Gà Rán KFC - Big C Huế",
                    address: "34 Hai Bà Trưng, P. Vĩnh Ninh, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g4/35941/prof/s640x400/image-69c5516e-220813113537.jpg",
                },
                {
                    name: "Doo Tokbokki - Ngô Gia Tự",
                    address: "4 Kiệt 21 Ngô Gia Tự, P. Vĩnh Ninh, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g109/1082070/prof/s640x400/foody-upload-api-foody-mobile-co-0c8ede21-210609192500.jpeg",
                },
                {
                    name: "Kem Xông Khói Tồ Tồ",
                    address: "67 Nguyễn Huệ, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g16/156679/prof/s640x400/file_restaurant_photo_sa6y_16187-23a0f0d1-210418112124.jpg",
                },
                {
                    name: "Xôi Mặn Cô Tủn",
                    address: "159 Trường Chinh, P. An Đông, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g106/1054936/prof/s640x400/file_restaurant_photo_qgif_16131-14fe7a74-210213101240.jpg",
                },
                {
                    name: "Heksa (Kim Sa) - Đặc Sản Các Món Cuốn Chấm Mắm Nêm",
                    address: "34 Kiệt 176 Phan Chu Trinh, P. Phước Vĩnh, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g77/767904/prof/s640x400/file_restaurant_photo_es85_16394-afb9b0e4-211214213118.jpeg",
                },
                {
                    name: "Nori Kimpap",
                    address: "24 Kiet 154 Bà Triệu, Tổ 4, P. Phú Nhuận, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g106/1057578/prof/s640x400/file_restaurant_photo_7nbz_16183-8d4821b3-210413151808.jpeg",
                },
                {
                    name: "Bong Boo Roo",
                    address: "115 Trường Chinh, P. An Đông, Tp. Huế, Huế",
                    phone: "0123456789",
                    imageUrl: "https://images.foody.vn/res/g106/1053709/prof/s640x400/foody-upload-api-foody-mobile-anh-dai-dien-va-anh-201102141218.jpg",
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
        await queryInterface.bulkDelete('shop', null, {});
    }
};
