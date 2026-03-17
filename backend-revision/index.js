require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require('./routes/userRoutes')

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.log("Something went wrong", error));

app.use('/api',router);


app.listen(3000,()=> console.log("Server is running on port 3000"));
