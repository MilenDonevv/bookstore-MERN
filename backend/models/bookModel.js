// https://mongoosejs.com/
// const Book = mongoose.model('Book', { name: String });  - create a Schema outside and use it here : { name: String }

import mongoose from 'mongoose';



const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true
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

export const Book = mongoose.model('Book', bookSchema);