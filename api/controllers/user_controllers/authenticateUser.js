const UserSchema = require("../../schema/userSchema.js")
const bcrypt = require("bcrypt")

const authenticateUser= async(req,res)=>{

    try{

        const email = req.body.email
        const password = req.body.password

        const user = await UserSchema.findOne({"email":email})

        if(user){

            bcrypt.compare(password,user.password,(error,result)=>{
                if(error){
                    console.log(error)
                    res.send(error.mmessage)
                }else if(result){
                    res.send("Login successful!")
                }else{
                    res.send("Wrong password!")
                }
            })

        }else{
            res.send("Email not valid!")
        }


    }catch(error){
        res.send(error.message)
    }
}

module.exports = authenticateUser