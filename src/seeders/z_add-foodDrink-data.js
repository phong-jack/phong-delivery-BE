"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
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
      COM_HOP: 13,
    };
    await queryInterface.bulkInsert("food_drink", [
      {
        name: "Cơm chiên xúc xích",
        description: "Cơm chiên xúc xích",
        price: 32000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lr30wwef6gn8b1@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.COM_HOP,
        shopId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sữa tươi trân châu kem trứng",
        description: "Sữa tươi trân châu kem trứng",
        price: 32000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lqxovydmgsyhb8@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.DO_UONG,
        shopId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cơm chiên xúc xích",
        description: "Cơm chiên xúc xích",
        price: 32000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lr30wwef6gn8b1@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.COM_HOP,
        shopId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cơm chiên xúc xích",
        description: "Cơm chiên xúc xích",
        price: 32000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lr30wwef6gn8b1@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.COM_HOP,
        shopId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cơm chiên xúc xích",
        description: "Cơm chiên xúc xích",
        price: 30000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lr30wwef6gn8b1@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.COM_HOP,
        shopId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //Donal trung
      {
        name: "Bún mắm heo quay",
        description: "Quý khách có yêu cầu ghi chú giúp quán",
        price: 40000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lqxcorqrf00446@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.DO_AN,
        shopId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("food_drink", null, {});
  },
};
