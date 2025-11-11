process.env.EMAIL_FROM_NAME="Zenga API"
process.env.EMAIL_FROM_ADDRESS="no-reply@zenga.de"

const {sendEmail} = require('../../src/middleware/emailer');

const mailData = {
  subject: "Test node mail",
  user: {
    name: "Username",
    email: "adrian.szlagor@gmail.com"
  },
  htmlMessage: "Hey you! :)"
}

sendEmail(mailData, ()=> {
  console.log("mail sent");
})
