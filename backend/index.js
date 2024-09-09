/*
npm install 
1) express 
2) nodemon 
3) mongoose


*/


import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';

const app = express();

// Middleware for parsing request body
app.use(express.json());


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('1. Get the /, then 2) return this SENT message to the server :))');
});

// Route for Saving a new Book
app.post('/books', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear 
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear'
            });
        }

        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        
        // using the mongoose Schema
        const book = await Book.create(newBook);

        return response.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route for Getting All books from database
app.get('/books', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

// Route for Getting One book from database
app.get('/books/:id', async (request, response) => {
    try {

        const { id } = request.params;

        const book = await Book.findById(id);

        return response.status(200).json(book);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})


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