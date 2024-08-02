const bookingModel = require('../models/booking.js')
const booksModel = require('../models/books.js')
const membersModel = require('../models/members.js')

exports.getAllBooking = async() => {
    const booking = await bookingModel.findAll({attributes: ['id', 'codeBook', 'codeName', 'Status','StartDate','endDate']})
    return booking

}

exports.postBooking = async(codeBook, codeName, quantity = 1) => {
    var datetime = new Date()
    const checkBooksIsExist = await booksModel.findOne({where : {code : codeBook}})
    const checkMembersIsExist = await membersModel.findOne({where: {code : codeName}})
    const countBookMember = await bookingModel.findAll({where : {
        codeName, Status : 'borrowed'
    }})
    if(checkBooksIsExist !== null && checkMembersIsExist !== null) {
        if(checkBooksIsExist.stock >0 && checkMembersIsExist.status !== 'Penalty' && countBookMember.length<2 && countBookMember.codeBook !== codeBook){
            checkBooksIsExist.stock = checkBooksIsExist.stock - quantity
            await checkBooksIsExist.save({fields:['stock']})
            await bookingModel.create({
                codeBook : checkBooksIsExist.code,
                codeName : checkMembersIsExist.code,
                quantity,
                Status : 'borrowed',
                StartDate : datetime
            })
            return {message : "buku berhasil dipinjam"}
        }
        else {
            return {message : "stock buku habis atau user terkena penalty atau anda sudah meminjam buku lebih dari 2 dan tidak dapat memimjam buku yang sama"}
        }
    }
    else{
        return {message : "nama atau buku tidak terdaftar"}
    }
}

exports.returnBooking = async (codeBook, codeName, endDate) => {
    // var datetime = new Date()
    const checkBooksIsExist = await booksModel.findOne({where : {code : codeBook}})
    const checkMembersIsExist = await membersModel.findOne({where: {code : codeName}})
    const checkIfBorrow = await bookingModel.findOne({where: {codeBook, codeName}, order:[['id', 'DESC']]})
    if(checkBooksIsExist !== null && checkMembersIsExist !== null){
        if(checkIfBorrow.Status === 'borrowed'){
            checkBooksIsExist.stock = checkBooksIsExist.stock + 1
            await checkBooksIsExist.save({fields:['stock']})
            checkIfBorrow.Status = 'returned'
            checkIfBorrow.endDate = endDate
            checkIfBorrow.quantity = 0
            await checkIfBorrow.save()
            var diffDate = Math.abs(new Date(checkIfBorrow.StartDate).getTime() - new Date(endDate).getTime())
            var diffDays = Math.ceil(diffDate / (1000*3600*24))
            if(diffDays>7){
                checkMembersIsExist.status = 'Penalty'
                checkMembersIsExist.save()
            }
            return {message : "buku berhasil dikembalikan"} 
        }
        else {
            return {message: "tidak ada buku yang dipinjam atau user tidak terdaftar"}
        }
    }
    else {
        return {message : "tidak ada buku atau user yang meminjam"}
    }
}