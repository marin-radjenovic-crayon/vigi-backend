const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

/**
 * Sends email
 * @param {Object} data - data
 * @param {boolean} callback - callback
 */
const sendEmail = async (data = {}, callback) => {
  const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
  });

  const mailOptions = {
    from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM_ADDRESS}>`,
    to: `${data.user.name} <${data.user.email}>`,
    subject: data.subject,
    html: data.htmlMessage
  };
  transporter.sendMail(mailOptions, err => {
    if (err) {
      console.log('send mail err', err.message);
      return callback(false);
    }
    return callback(true);
  });
};

module.exports = { sendEmail };
