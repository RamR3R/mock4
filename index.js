const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.mongoURL);
const express = require('express');
const tripRouter = require("./Routes/trip.Routes");
const app = express()
app.use(express.json());
app.use("/api",tripRouter);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(process.env.PORT, async() => {
    try{
        await connection;
        console.log(`Server is running on with DB connection ${process.env.PORT}!`);
    }
    catch(err){
        console.log(err.message)
    }
})