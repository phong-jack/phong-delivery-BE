"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("shop", [
      {
        id: 1,
        name: "1985BBQ - 2 Bà Triệu (Nướng Lẩu-Ăn Vặt Và Trà Sữa)",
        address: "2 Bà Triệu, P. Phú Hội, Tp. Huế, Huế",
        phone: "0123456789",
        lat: 16.4609,
        lng: 107.6,
        isWorking: true,
        imageUrl:
          "https://images.foody.vn/res/g73/725143/prof/s640x400/foody-upload-api-foody-mobile-cu-ffd77575-220417130548.jpeg",
      },

      {
        id: 2,
        name: "Donald Trung - Bánh Ướt & Bánh Cuốn Thịt Heo",
        address: "28 Hoàng Văn Thụ, P. An Đông, Tp. Huế, Huế",
        phone: "0123456789",
        lat: 16.4619,
        lng: 107.59546,
        isWorking: true,
        imageUrl:
          "https://images.foody.vn/res/g69/681408/prof/s640x400/foody-upload-api-foody-mobile-img_2952-190327151015.jpg",
      },
      {
        id: 3,
        name: "Gà rán và Mì Ý - Jollibee - Hùng Vương",
        address:
          "Tầng 4, Tầng 4, Vincom Plaza, 50A Hùng Vương, P. Phú Nhuận, Tp. Huế, Huế",
        phone: "0123456789",
        lat: 16.4619,
        lng: 107.59546,
        isWorking: true,
        imageUrl:
          "https://mms.img.susercontent.com/vn-11134513-7r98o-lsu3u6tjrj4paf@resize_ss640x400!@crop_w640_h400_cT",
      },
      {
        id: 4,
        name: "Kinh Bắc - Bún Đậu Mắm Tôm",
        address: "6/16 Trường Chinh Tổ 2, P. Xuân Phú, Tp. Huế, Huế",
        phone: "0123456789",
        lat: 16.4607783,
        lng: 107.6039743,
        isWorking: true,
        imageUrl:
          "https://images.foody.vn/res/g4/32324/prof/s640x400/foody-upload-api-foody-mobile-22323434-210121141934.jpg",
      },
      {
        id: 5,
        name: "Đặc Sản Xứ Quảng - Mì Quảng & Bún Mắm",
        address: "103/19 Nguyễn Trường Tộ, P. Vĩnh Ninh, Tp. Huế, Huế",
        phone: "0123456789",
        lat: 16.4619,
        lng: 107.59546,
        isWorking: true,
        imageUrl:
          "https://images.foody.vn/res/g79/786263/prof/s640x400/foody-upload-api-foody-mobile-foody-dac-san-xu-qua-181012084917.jpg",
      },
      {
        id: 6,
        name: "Nhà Cám - Bún Đậu Mắm Tôm - Nguyễn Lương Bằng",
        address: "33 Nguyễn Lương Bằng, P. Phú Hội, Tp. Huế, Huế",
        phone: "0123456789",
        lat: 16.4631765,
        lng: 107.5988049,
        isWorking: true,
        imageUrl:
          "https://images.foody.vn/res/g88/870335/prof/s640x400/foody-upload-api-foody-mobile-foody-upload-api-foo-190820154516.jpg",
      },
      {
        id: 7,
        name: "Bếp Ở HẺM 34",
        address: "7/34 Nguyễn Tri Phương, P. Phú Nhuận, Tp. Huế, Huế",
        lat: 16.4619,
        lng: 107.59546,
        isWorking: true,
        phone: "0123456789",
        imageUrl:
          "https://images.foody.vn/res/g109/1082398/prof/s640x400/file_restaurant_photo_gkga_16503-82e40e06-220419151800.jpg",
      },
      {
        id: 8,
        name: "Chân Gà Huyền Trang (GỐC) - Nguyễn Lộ Trạch",
        address: "3 Kiệt 125A Nguyễn Lộ Trạch, P. Xuân Phú, Tp. Huế, Huế",
        phone: "0123456789",
        lat: 16.4701818,
        lng: 107.5996606,
        isWorking: true,
        imageUrl:
          "https://images.foody.vn/res/g94/933048/prof/s640x400/file_restaurant_photo_vkti_16809-4b34ccb7-230408171008.jpg",
      },
      {
        id: 9,
        name: "Chân Gà Huyền Trang ( Bà Trang GỐC) - 39 Tố Hữu",
        address: "39 Tố Hữu, P. Xuân Phú, Tp. Huế, Huế",
        phone: "0123456789",
        imageUrl:
          "https://images.foody.vn/res/g115/1143332/prof/s640x400/foody-upload-api-foody-mobile-an-3d10ad84-230115185101.jpeg",
      },
      {
        id: 10,
        name: "Tiệm Ăn Vặt 1999",
        address: "21 Kiệt 116 Bà Triệu, P. Phú Hội, Tp. Huế, Huế",
        phone: "0123456789",
        imageUrl:
          "https://images.foody.vn/res/g105/1047551/prof/s640x400/foody-upload-api-foody-mobile-ca-770e507c-230605112256.jpg",
      },
      {
        id: 11,
        name: "HOTTO - Trà Sữa & Bánh Takoyaki - Hai Bà Trưng",
        address: "34 Hai Bà Trưng, P. Vĩnh Ninh, Tp. Huế, Huế",
        phone: "0123456789",
        imageUrl:
          "https://images.foody.vn/res/g30/291564/prof/s640x400/foody-upload-api-foody-mobile-co-ae39f7ed-230425105423.jpeg",
      },
      {
        id: 12,
        name: "Gà Rán KFC - Big C Huế",
        address: "34 Hai Bà Trưng, P. Vĩnh Ninh, Tp. Huế, Huế",
        phone: "0123456789",
        imageUrl:
          "https://images.foody.vn/res/g4/35941/prof/s640x400/image-69c5516e-220813113537.jpg",
      },
      {
        id: 13,
        name: "Doo Tokbokki - Ngô Gia Tự",
        address: "4 Kiệt 21 Ngô Gia Tự, P. Vĩnh Ninh, Tp. Huế, Huế",
        phone: "0123456789",
        imageUrl:
          "https://images.foody.vn/res/g109/1082070/prof/s640x400/foody-upload-api-foody-mobile-co-0c8ede21-210609192500.jpeg",
      },
      {
        id: 14,
        name: "Kem Xông Khói Tồ Tồ",
        address: "67 Nguyễn Huệ, Tp. Huế, Huế",
        phone: "0123456789",
        imageUrl:
          "https://images.foody.vn/res/g16/156679/prof/s640x400/file_restaurant_photo_sa6y_16187-23a0f0d1-210418112124.jpg",
      },
      {
        id: 15,
        name: "Xôi Mặn Cô Tủn",
        address: "159 Trường Chinh, P. An Đông, Tp. Huế, Huế",
        phone: "0123456789",
        imageUrl:
          "https://images.foody.vn/res/g106/1054936/prof/s640x400/file_restaurant_photo_qgif_16131-14fe7a74-210213101240.jpg",
      },
      {
        id: 16,
        name: "Heksa (Kim Sa) - Đặc Sản Các Món Cuốn Chấm Mắm Nêm",
        address: "34 Kiệt 176 Phan Chu Trinh, P. Phước Vĩnh, Tp. Huế, Huế",
        phone: "0123456789",
        imageUrl:
          "https://images.foody.vn/res/g77/767904/prof/s640x400/file_restaurant_photo_es85_16394-afb9b0e4-211214213118.jpeg",
      },
      {
        id: 17,
        name: "Nori Kimpap",
        address: "24 Kiệt 154 Bà Triệu, Tổ 4, P. Phú Nhuận, Tp. Huế, Huế",
        phone: "0123456789",
        imageUrl:
          "https://images.foody.vn/res/g106/1057578/prof/s640x400/file_restaurant_photo_7nbz_16183-8d4821b3-210413151808.jpeg",
      },
      {
        id: 18,
        name: "Bong Boo Roo",
        address: "115 Trường Chinh, P. An Đông, Tp. Huế, Huế",
        phone: "0123456789",
        imageUrl:
          "https://images.foody.vn/res/g106/1053709/prof/s640x400/foody-upload-api-foody-mobile-anh-dai-dien-va-anh-201102141218.jpg",
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
    await queryInterface.bulkDelete("shop", null, {});
  },
};
