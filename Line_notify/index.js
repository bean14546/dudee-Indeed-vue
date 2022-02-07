const express = require('express')
const app = express()
const cors = require('cors')
const request = require('request');
const dotenv = require('dotenv');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
dotenv.config();


const url_line_notification = "https://notify-api.line.me/api/notify";
app.get('/', () => {
    request({
        method: 'POST',
        uri: url_line_notification,
        header: {
            'Content-Type': 'multipart/form-data',
        },
        auth: {
            bearer: process.env.TOKEN,
        },
        form: {
            message: 'เหลือเวลาอีก 1 นาที'
        },
    }, (err, httpResponse, body) => {
        if (err) {
            console.log(err)
        } else {
            console.log(body)
        }
    });
})

app.listen(3000)