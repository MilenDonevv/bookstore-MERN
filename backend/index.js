/*
npm install 
1) express 
2) nodemon 
3) mongoose
4) cors -  Cross-Origin Resource Sharing


*/

import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import  BooksRoute  from "./Routes/booksRoute.js";
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)

// --> app.use(cors());

// Option 2:  Allow Custom Origins - better way cuz we have better control - using options
app.use(
    cors({
        origin: "http://localhost:3000",   // f.ex. a react app running on 3000 can now access this
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-type'],
}))


app.get("/", (request, response) => {
  console.log(request);
  return response
    .status(234)
    .send("1. Get the /, then 2) return this SENT message to the server :))");
});

app.use("/books", BooksRoute);

// connect to mongoDB database
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");

    // this message should show up ONLY IF the db is connected to the express server
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

/*

Mongoose methods:

1)  Book.create()
    Usage: Book.create(dataObject)

Description:

This method is used to create and insert a new document into a MongoDB collection. 
It takes a data object that matches the schema you defined and inserts that object as a new document in the collection.
It returns a promise that resolves with the newly created document.

const newBook = {
    title: "Moby Dick",
    author: "Herman Melville",
    publishYear: 1851
};

const book = await Book.create(newBook); // Saves and returns the created book



2)  Book.findById(id)
    Usage: Book.findById(id)

Description:

This method is used to retrieve a document from the collection by its unique MongoDB _id field. 
It accepts the document’s id and returns the corresponding document.
If the document with the provided id exists, it resolves the promise with the document; otherwise, it returns null.

const bookId = "66ddcf46f863bdc9067fd150";

const book = await Book.findById(bookId); // Retrieves the book with this ID



3)  Book.findByIdAndUpdate(id, updateObject)
    Usage: Book.findByIdAndUpdate(id, updateObject, options)


Description:

This method is used to find a document by its _id and update it with new values provided in the updateObject.
It returns the updated document or the old one depending on the options you specify. 
By default, it returns the original document (before the update).
You can pass { new: true } in the options to get the updated document in the response.


const bookId = "66ddcf46f863bdc9067fd150";
const updatedData = { title: "Updated Title", publishYear: 2023 };

const updatedBook = await Book.findByIdAndUpdate(bookId, updatedData, { new: true });


--> Key Notes:
These methods are part of Mongoose's built-in functionality and allow you to perform operations 
on your MongoDB collection in a clean, promise-based way.
Mongoose handles the conversion between the JavaScript objects you work with and the MongoDB BSON (Binary JSON) data type !!!



4)  find()
    Usage: Book.find(query)


Description:

Retrieves all documents that match the query object. If no query is passed, it retrieves all documents in the collection.


const books = await Book.find({ author: "J.K. Rowling" });





5)  findOne()
    Usage: Book.findOne(query)


Description:

Retrieves the first document that matches the query object. 
Useful when you expect a single document and want only the first match.


const book = await Book.findOne({ title: "Harry Potter and the Philosopher's Stone" });



6)  findByIdAndDelete()
    Usage: Book.findByIdAndDelete(id)


Description:

Finds a document by its _id and deletes it from the collection.


await Book.findByIdAndDelete("66ddcf46f863bdc9067fd150");



7)  deleteMany()
    Usage: Book.deleteMany(query)

Description:

Deletes multiple documents that match the given query.


await Book.deleteMany({ author: "Unknown" });




8)  countDocuments()
    Usage: Book.countDocuments(query)


Description:

Counts the number of documents that match the query. 
If no query is passed, it returns the total number of documents in the collection.


const count = await Book.countDocuments({ author: "J.K. Rowling" });




9)  updateOne()
    Usage: Book.updateOne(query, updateObject)


Description:

Updates a single document that matches the query object.


await Book.updateOne({ title: "Old Title" }, { title: "New Title" });





10) updateMany()
    Usage: Book.updateMany(query, updateObject)


Description:

Updates multiple documents that match the query.


await Book.updateMany({ author: "Unknown" }, { author: "Anonymous" });



11) save()
    Usage: book.save()


Description:

Saves an instance of a model (a document) to the database. 
If the document already exists, it will update it.


const newBook = new Book({ title: "New Book", author: "New Author" });
await newBook.save(); // Saves the new book in the database




12) populate()
    Usage: Book.find().populate('relatedField')

Description:

Populates referenced documents in a query result, 
commonly used when you have related data between models using ObjectId references.


const booksWithAuthors = await Book.find().populate('author');






13) distinct()
    Usage: Book.distinct(field)


Description:

Retrieves distinct values for the specified field across documents in the collection.


const uniqueAuthors = await Book.distinct("author");

*/
