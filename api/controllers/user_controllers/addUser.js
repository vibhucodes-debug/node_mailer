const UserSchema = require("../../schema/userSchema.js")
const bcrypt = require("bcrypt")
const mailer = require("../../utils/Mailer.js")
let LocalStorage = require("node-localstorage").LocalStorage
let localStorage = new LocalStorage('./scratch')

const addUser = async(req,res) => {

    let hashedPassword = null
    
    try{
        const {firstname,lastname,email,password} = req.body

        const generateOtp =()=>{
            let str = ""
            for(let i = 0;i<6;i++){
                str+=Math.floor(Math.random()*10)
            }
            return str
        }

        bcrypt.hash(password,salt,async(err,hash)=>{

            if(err){
                console.log(err)
                res.send("Internal server error!")
            }

            hashedPassword = hash

            const User = UserSchema({firstname,lastname,email,password:hashedPassword})
            await User.save()

            const otp = generateOtp()
            localStorage.setItem('verify_otp',`${otp}`)
            localStorage.setItem('verification_email',email)

            try{
                const isMail = await mailer({to:email,subject:"Confirmation mail",text:`Confirm your email id, your one time password is (${otp})`})
                res.send({"Confirmation mail sent. Please check your email.":isMail})
            }catch(error){
                res.send({"Error sending mail, please check if the mail is valid.":error})
            }

            
        })
        
    }catch(error){
        res.send(error.message)
    }
}

module.exports = addUser
