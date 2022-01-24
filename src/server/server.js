const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

app.set('port', 3000);
 
async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://FSB-code:password@cluster0.zhntu.mongodb.net/myFirstDatabase',
            {
                useNewUrlParser: true
            }
        )
        app.listen(app.get('port'), () => {
            console.log(`[OK] Server is running on localhost:${app.get('port')}`);
        })
        console.log("[OK] DB is connected")
    } catch (e) {
        console.log(e)
    }
}

start()

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
