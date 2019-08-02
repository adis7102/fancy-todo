var nodemailer = require('nodemailer');
module.exports = (userEmail) => {
    let htmlMessage = `
    <h2>Hello<h2><br> 
    <p>how's your day? checkout our newest question perhaps you can help someone out there to solve their problem. Click the link below!<p><br>
    <a>http://localhost:3000</a>
    `    

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 28,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD_EMAIL
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let emails = userEmail.join(',')
    let HelperOptions = {
        from: "Stacker Overflow <adisaputrra22@gmail.com>",
        to: emails,
        subject: 'Hello there!',
        // text: message,
        html : htmlMessage
    };

    transporter.sendMail(HelperOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("The message was sent!");
        console.log(info);
    });
}