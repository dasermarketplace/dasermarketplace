'use strict';
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var mailer = function () {
};

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'test@gmail.com', //You need to create this mailbox
        pass: 'password'
    }
}));



mailer.sendVerificationMail = function (email, verificationCode, id) {
    // setup email data with unicode symbols
    var mailOptions = {
        from: 'test@gmail.com', // sender address
        to: email,
        subject: 'Email Verification ✔', // Subject line
        html: `
<html>
<body>
<pre>
Welcome to Our Company,

To get started, please click on the below link to confirm your email:
http://localhost:4001/customer/everify?di=[id]&verificationCode=[recovery_token]

Regards,
Admin
</pre>
</body>
</html>`
    };

    mailOptions.html = mailOptions.html.replace('[id]', id);
    mailOptions.html = mailOptions.html.replace('[recovery_token]', verificationCode);
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
};

module.exports = mailer;
