const nodemailer = require('nodemailer');

const tranporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'sender_email@example.<EMAIL>',
        pass: '<PASSWORD>' // sender email password here
        },
});

const mailOptions = {
    from:'sender_name <sender_email@example.com>',  // sender name and
    to: ['receiver1_email<receiver2_email>'],   // receiver emails separated
    subject: "Hello",                            // message title
    text: "Testing Node Mailer"                  // plain-text body of the message (optional
};

tranporter.sendMail(mailOptions, function(error,info){
    if (error){
        console.log(error);
    } else {
        console.log('email sent' + info.response)
    }
})