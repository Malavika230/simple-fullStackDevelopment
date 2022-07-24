// This the Books Collection System Controller Module
// We will use mongoose node module for accessing our database from MongoDB
const mongoose = require('mongoose');

// First let us connect to the database mydb running locally on my PC
mongoose
    .connect('mongodb://127.0.0.1:27017/books', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

// We need to create a schema before reading data from the database
const BooksSchema = new mongoose.Schema(
    {
        Book: { type: [String], required: true },
        Auther: { type: [String], required: true },
		Publication_date: { type: [String], required: true },
        Publisher: { type: [String], required: true },
        Language: { type: String, required: true },
		Country: { type: [String], required: true },
    },
    { timestamps: true },
)

// Next is to create a model within mongoose using the schema and our database
const Books = mongoose.model('classics', BooksSchema);

// This function searches for data in the model and returns data in JSON format
// Right now, this function gets information about all books
getBooks = async (req, res) => {
    await Books.find({}, (err, booksLocal) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!booksLocal.length) {
            return res
                .status(404)
                .json({ success: false, error: `Books not found` })
        }
        return res.status(200).json({ success: true, data: booksLocal })
    }).catch(err => console.log(err))
}
// Our controller would expose the getBooks function to whoever is using it
module.exports = {
    getBooks
}