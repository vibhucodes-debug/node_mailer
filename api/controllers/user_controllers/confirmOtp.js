const userSchema = require("../../schema/userSchema")

let LocalStorage = require("node-localstorage").LocalStorage
let localStorage = new LocalStorage('./scratch')

const confirmOtp =async(req,res)=>{

    try{
        const userOtp = req.headers.otp

        const generatedOtp = localStorage.getItem('otp')
        const user_email = localStorage.getItem('verification_email')

        if(userOtp == generatedOtp){
            const user = await userSchema.findOne({email:user_email})
            if(user){
                
            }
            res.send("Email Verified")
        }else{
            res.send("OTP doesn't match. Please, retry!")
        }

    }catch(error){
        res.send(error.message)
    }

}


module.exports = confirmOtp