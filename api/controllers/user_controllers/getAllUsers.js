const UserSchema = require("../../schema/userSchema.js")

const getAllUsers =async(req,res)=>{

    try{
        const users = await UserSchema.find()
        if(users){
            res.send(users)
        }else{
            res.send("Problem fetching users!")
        }
    }catch(error){
        res.send(error.message)
    }
}

module.exports = getAllUsers