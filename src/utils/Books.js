const booksModel = require('../models/books')
const {Op} = require('sequelize')

exports.getAllBooks = async() =>  {
    const books = await booksModel.findAll({
    attributes: ['id', 'title', 'code', 'author', 'stock'], where: {
        stock : {[Op.gt] : 0}
    }})
    return books
}

exports.postBook = async(title, code, author, stock) => {
    const bookExist = await booksModel.findOne({where: {code}})
    // console.log(bookExist)
    if(!title || !code || !author || !stock|| bookExist !== null){
        return {message : 'data yang dimasukan tidak benar mohon dicek kembali'}
    }
    await booksModel.create({
        title,
        code,
        author,
        stock
    })
    return {message : 'data berhasil dimasukan'}
}
