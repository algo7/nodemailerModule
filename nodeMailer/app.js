'use strict'
//Dependencies
const mailer = require('nodemailer');
//Credentials
const creds = require('./creds/gmail');
//Mailing Function
const mailFunc = (subject, recipient, msg, cbMail) => {

    //Create transport + auth
    let transporter = mailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
            user: creds.userName,
            pass: creds.password
        }
    });

    //Create the message object
    let message = {
        from: 'viralapp.me@gmail.com',
        to: recipient,
        subject: subject,
        text: msg,
        // html: "<p>HTML version of the message</p>"
    };

    //Send mail
    transporter.sendMail(message)
        .then(res => {
            cbMail(res.response);
        })
        .catch(err => {
            cbMail(err);
        })
}
mailFunc('asd', 's2803211@gmail.com', 'asd', cbMail => {
    console.log(cbMail)
})


module.exports = { mailFunc }

