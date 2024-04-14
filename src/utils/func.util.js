const _ = require('lodash');
const nodemailer = require('nodemailer');
const slug = require('slug');

const pickAnObject = (object, keys = []) => {
  return _.pick(object, keys);
};



const sendMail = async (to, subject, htmlContent) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.email',
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.APP_PASSWORD
      }
    });

    const options = {
      from: process.env.EMAIL_NAME,
      to: to,
      subject: subject,
      html: htmlContent
    };

    return transporter.sendMail(options);

  } catch (error) {
    console.log(error);
  }
};

const getSlug = (input) => {
  slug(input);
};

module.exports = {
  pickAnObject,
  sendMail,
  getSlug
};