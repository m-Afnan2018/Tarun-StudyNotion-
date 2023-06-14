exports.feedbackMail = (email,firstName ,lastName,message,phone) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Course Registration Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="https://studynotion-edtech-project.vercel.app"><img class="logo" src="https://i.ibb.co/7Xyj3PC/logo.png"
                    alt="StudyNotion Logo"></a>
            <div class="message">Contact Form Confirmation</div>
            <div class="body">
                <p>Dear ${firstName} ${lastName?lastName:""},</p>
                <p>Thankyou for contacting us we have received your message and we will respond to you
                as soon as possible</p>
                <p>Here are the details which you've Provided.
                </p>
                <p>name : ${firstName} ${lastName?lastName:""}</p>
                <p>email : <a>${email}</a></p>
                <p>phone : ${phone}</p>
                <p>message : ${message}</p>
            </div>
            <div class="support">We appreciate your intrest and we will get backto you shortly</div>
        </div>
    </body>
    
    </html>`;
  };