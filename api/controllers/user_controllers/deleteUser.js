const UserSchema = require("../../schema/userSchema")

const deleteUser = async(req,res) =>{

    try{

        const email = req.body.email
        const password = req.body.password
        // Check if the user exists
        const user = await UserSchema.findOne({"email":email})
        if(user){

            if(password == user.password){

                await UserSchema.findByIdAndDelete(user.id)
                res.send("User Deleted!")
            }else{
                res.send("Invalid password!")
            }
        }else{
            res.send("User with this email doesn't exit.")
        }

    }catch(error){
        res.send(error.message)
    }
}

module.exports = deleteUser