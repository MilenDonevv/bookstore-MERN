// https://mongoosejs.com/
// const Book = mongoose.model('Book', { name: String });  - create a Schema outside and use it here : { name: String }

import mongoose from 'mongoose';



const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        author: {
            type: String,
            required: true
        },
        publishYear: {
            type: Number,
            required: true
        },
        // ... other fields
    }
)

export default mongoose.model('Book', bookSchema); // create a Book by this Schema