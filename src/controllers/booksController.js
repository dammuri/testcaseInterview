const books = require('../utils/Books.js')

exports.getAllBooks = async(req, res) => {
   try
    {
        const bookData = await books.getAllBooks()
        res.json(bookData)
    }
    catch(err) {
        res.send(err.message)
    }
}

exports.postBook = async(req,res) => {
    try {
        const {title, code, author, stock} = req.body
        const book = await books.postBook(title, code, author, stock)
        res.json({message :book})
    }
    catch(err){
        res.send(err)
    }
}