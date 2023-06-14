const mongoose = require('mongoose');
const sendMail = require('../Config/mailSender');
const emailVerification = require('../mail/templates/emailVerificationTemplate')
const otpSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60
    },
    otp: {
        type: String,
        required: true
    }

});

// Function to send verification Email...
const sendVerificationMail = async (email, otp) => {
    try {  console.log("Email inside funcn", this.email);
        const response = await sendMail(email, "Verification Email", emailVerification(otp));
        console.log("Mail Sent Successfully", response);

    } catch (error) {

        console.log("Error While Sending mail", error);
        throw error;
    }
}

otpSchema.pre("save", async function(next) {


    // if (this.isNew) {
        await sendVerificationMail(this.email, this.otp);
        console.log("Email", this.email);
    // }
   
    next();

})


module.exports = mongoose.model("Otp", otpSchema);