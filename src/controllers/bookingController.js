const booking = require('../utils/booking')

exports.getAllBooking = async(req,res) => {
    try
    {
        const bookingData = await booking.getAllBooking()
        res.json(bookingData)
    }
    catch(err){
        res.send(err.message)
    }
}

exports.postBooking = async(req,res) => {
    try{
        const {codeBook, codeName, quantity} = req.body
        const dataBooking = await booking.postBooking(codeBook, codeName, quantity)
        res.json({
            message: dataBooking
        })
    }
    catch(err){
        res.send(err.message)
    }
}

exports.returnBooking = async(req,res) => {
    try{
        const {codeBook, codeName, endDate} = req.body
        const dataBooking = await booking.returnBooking(codeBook, codeName, endDate)
        res.json({
            message: dataBooking
        })
    }
    catch(err){
        res.send(err.message)
    }
}