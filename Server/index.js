const express = require('express');
const connectDb = require('./Config/Database');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
require('dotenv').config();

// import routes 
const userRoutes = require('./routes/User')
const paymentRoutes = require('./routes/Payments')
const profileRoutes = require('./routes/Profile')
const courseRoutes = require('./routes/Course')

const cloudinaryConnect = require('./Config/Cloudinary');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)


app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/temp'
}))

// Db Connection
connectDb();

// cloudinaryConnection

cloudinaryConnect();

// configure routes 
app.use('/api/v1/auth', userRoutes);
// app.use('/api/v1/payment',paymentRoutes);
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/course', courseRoutes);

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "your server is up and running"
    });
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});
