const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{type:String},
    author:{type:String},
    desc:{type:String}
})

const Book = mongoose.model('Book', BookSchema,'Collection_Name')

module.exports = Book;