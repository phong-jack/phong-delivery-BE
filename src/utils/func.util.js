const _ = require("lodash");
const nodemailer = require("nodemailer");
const slug = require("slug");

const pickAnObject = (object, keys = []) => {
  return _.pick(object, keys);
};

const sendMail = async (to, subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.email",
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.APP_PASSWORD,
      },
    });

    const options = {
      from: process.env.EMAIL_NAME,
      to: to,
      subject: subject,
      html: htmlContent,
    };

    return transporter.sendMail(options);
  } catch (error) {
    console.log(error);
  }
};

const getSlug = (input) => {
  slug(input);
};

function sortOrdersByUpdatedAtDesc(orders) {
  // Sử dụng phương thức sort để sắp xếp các đơn hàng theo thời gian updatedAt mới nhất
  orders.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  return orders;
}

function sortObject(obj) {
  var sorted = {};
  var keys = Object.keys(obj);
  keys.sort();
  keys.forEach(function (key) {
    sorted[key] = obj[key];
  });
  return sorted;
}

function getDatesInRange(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}

module.exports = {
  pickAnObject,
  sendMail,
  getSlug,
  sortOrdersByUpdatedAtDesc,
  sortObject,
  getDatesInRange,
};
