const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoute = require('./routes/userRoute');
const cors = require("cors");
app.use(cors());

// body aparser

app.use(express.json());

mongoose
    .connect('mongodb://127.0.0.1:27017/merndb')
    .then(() => {
        console.log('connected successfully');
        app.listen(4000);
    })
    .catch((error) => {
        console.log('error', error);
    })

    app.use("/api/user", userRoute);

// app.listen(4000) 