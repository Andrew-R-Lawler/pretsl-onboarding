const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');

router.post('/', (req, res) => {
    var transport = nodemailer.createTransport({
        host: "email-smtp.us-east-1.amazonaws.com",
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    var mailOptions = {
        from: 'Andrew.R.Lawler@gmail.com',
        to: req.body.customer_email,
        subject: req.body.subject,
        text: req.body.email_body,
    };


    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
})


module.exports = router;