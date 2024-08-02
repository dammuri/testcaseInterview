const membersModel = require('../models/members.js')
const db = require('../Database/conQuery.js')

exports.getAllMember = async () =>{
    const members = await db.query('select a.code, a.name, ifnull(sum(b.quantity),0) as number_Borrowed from members a LEFT JOIN bookings b on a.code = b.codeName group by a.name;')
    return members
}

exports.postMember = async (code, name) => {
    const memberIsExist = await membersModel.findOne({where : {code}})
    console.log(memberIsExist)
    if(!code || !name || memberIsExist !== null){
        return {message : "data yang dimasukan terdapat kesalahan, mohon dicheck kembali"}
    }
    await membersModel.create({
        code,
        name
    }) 
    return {message: "data berhasil dimasukan"}
}

