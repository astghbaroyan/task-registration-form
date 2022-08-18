const express = require('express');
const app = express();
const http = require('http').createServer(app);
const mongoose = require('mongoose');
const userRouter = require('./backend/routers/router.js');
const dotenv = require('dotenv');
const json = express.json();
const port = process.env.PORT || 5000;
dotenv.config();

const staticFiles = express.static('./frontend');
app.use(staticFiles);
app.use(json);
app.use(userRouter);

(async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('DB connected successfully to server');
    } catch (error) {
        console.log('DB connection error', error);
    }
})();

http.listen(port, () => {
    console.log(`server is listening port ${port}`);
});
