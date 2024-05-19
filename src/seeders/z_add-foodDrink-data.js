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
        name: "Ốc nhồi ăn kèm dưa leo chua ngọt",
        description: "Ốc nhồi ăn kèm dưa leo chua ngọt",
        price: 32000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lqzg8gm9mtok8f@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.DO_AN,
        shopId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mì cay chả ốc",
        description: "Mì cay chả ốc",
        price: 42000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lqxpepno9zno65@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.DO_AN,
        shopId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lẩu Tô Chả ốc",
        description: "Quán đóng vào tô giấy cẩn thận. ",
        price: 30000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lqykxrmm5t3tfd@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.DO_AN,
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
      {
        name: "Bánh ướt heo quay",
        description:
          "Quý khách có yêu cầu ghi chú giúp quán ạ (VD: bỏ riêng từng phần, thêm…)",
        price: 85000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lqx33chiwptwcc@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.DO_AN,
        shopId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bánh ướt heo luộc",
        description: "Bánh ướt heo luộc",
        price: 75000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lqx33d3zztspdf@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.DO_AN,
        shopId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mi Quang Heo Quay",
        description: "",
        price: 40000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lr6ilas0fpvoed@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.DO_AN,
        shopId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mi Quang Thit Trung",
        description: "Quý khách có yêu cầu ghi chú giúp quán",
        price: 40000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lqzbqyh1xih0d5@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.DO_AN,
        shopId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //JOLIBEE
      {
        name: "1 Miếng Gà Giòn Vui Vẻ",
        description: "Quý khách có yêu cầu ghi chú giúp quán",
        price: 33000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lr04gyugki3dec@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.CHICKEN,
        shopId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "1 Cơm Gà Giòn Vui Vẻ + 1 Súp bí đỏ + 1 Nước ngọt Lớn",
        description: "1 Chickenjoy with rice + 1 Soup + 1 Large Softdrink",
        price: 63000,
        image:
          "https://mms.img.susercontent.com/vn-11134517-7r98o-lr04gy75k0ihee@resize_ss120x120!@crop_w120_h120_cT",
        categoryId: CATEGORY_CONST.CHICKEN,
        shopId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("food_drink", null, {});
  },
};
