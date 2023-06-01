const nodemailer = require("nodemailer");
const otpTemplate = require("../mail/templates/emailVerificationTemplate");
require('dotenv').config();

const sendMail = async (email, title, body) => {
    try {
        console.log("Email inside mailsender", email);
        let transporter = nodemailer.createTransport({
            service: 'smtp.gmail.com',
            host: 'smtp.gmail.com',
            starttls: {
                enable: true
            },
            secureConnection: true,
            auth: {
                user: "studynotion0@gmail.com",
                pass: "yfyuhsxjgxvhlpoc",
            },
        })


        let info = await transporter.sendMail({
            from: 'studynotion0@gmail.com',
            to: email,
            subject: title,
            html: otpTemplate(body),
        })
        return info;
    }
    catch (error) {
        console.log(error.message);
    }
}


module.exports = sendMail;