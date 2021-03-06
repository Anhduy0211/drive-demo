import express = require('express');
import firebaseSDK = require('../service_account_firebase')
import env = require('../environment')
import fakeData = require('../fakeData/temperData')
import cors = require('cors')
import bodyPraser = require('body-parser')
import admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(firebaseSDK.firebaseAdminSDK),
    databaseURL: "https://u-space-drive.firebaseio.com"
})
const server = express();
const logger = (req, res, next) => {
    if (env.environment.logging) {
        console.log(`${req.method} : ${req.url.toString()}`),
        next();
    } else {
        next();
    }
};

server.use(logger);
server.use(cors());
// server.use(bodyPraser());
server.use(express.json());

server.get("/", async (req, res) => {
    res.send("Hello World")
})


// Add route
server.use('/createFile', require('./router/createFile'));
server.use('/upload', require('./router/uploader'));
server.use('/remove', require('./router/removeFile'));





const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})
// npm run start:watch