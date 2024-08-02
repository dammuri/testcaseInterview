const members = require('../utils/Members.js')

exports.getAllMembers = async(req,res) => {
    try {
        const memberAll = await members.getAllMember()
        res.json({
            data : memberAll
        })
    }
    catch(err){
        res.send(err.message)
    }
}


exports.postMember = async(req, res) => {
    try{
        const {code, name} = req.body
        const postMember = await members.postMember(code, name)
        res.json({message : postMember})
    }
    catch(err) {
        res.send(err.message)
    }
}