/*
npm install -  express nodemon mongoose


*/


import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('1. Get the /, then 2) return this SENT message to the server :))');

});




// connect to mongoDB database
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');

        // this message should show up ONLY IF the db is connected to the express server
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });