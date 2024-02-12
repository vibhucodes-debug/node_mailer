const { rmSync } = require("fs")
const UserSchema = require("../../schema/userSchema.js")

const updateUser = async(req,res) =>{

    try{

        const {firstname,lastname,email,password} = req.body
        console.log(email)
        console.log(password)
        if(!email || !password){
            res.send("Email or password not valid!")
        }else{
            if(email.length < 7){
                res.send("Email is required!")
            }else{
                const user = await UserSchema.findOne({email:email})
                
                if(user.password == password){
                    if(user){
                        await UserSchema.findByIdAndUpdate(user.id,{$set:{firstname:firstname,lastname:lastname}})
                        res.send("Fields updated!")
                    }else{
                        res.send("User not found!")
                    }
                }else{
                    res.send("Password not valid!")
                }
            }
        }
        
    }catch(error){
        console.log(error.message)
    }

}

module.exports = updateUser