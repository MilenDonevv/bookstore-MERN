/*



*/


import express from "express";
import { PORT } from "./config.js";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('1. Get the /, then 2) return this SENT message to the server :))');

});

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});
