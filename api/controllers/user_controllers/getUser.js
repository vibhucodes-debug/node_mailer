const UserSchema = require("../../schema/userSchema.js")

const getUser = async(req,res) =>{

    try{
        const email = req.body.email
        const user = await UserSchema.findOne({email:email})
        if(user){
            res.send(user)
        }else{
            res.send("User with this email doesn't exist.")
        }
    }catch(error){
        console.log(error.message)
    }

}

module.exports = getUser