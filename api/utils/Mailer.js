
const nodemailer = require("nodemailer")


async function Mailer(options){

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user:'centralintelligence300@gmail.com',
            pass:'jlyp rclk ovrt pccc'
        }
    })

    const {to,subject,text} = options

    const mailOptions = {
        from: 'centralintelligence300@gmail.com',
        to,
        subject,
        text
    }

    const promise = new Promise((resolve,reject)=>{

        transporter.sendMail(mailOptions,(err,info)=>{
          
            if(err){
                reject(err)
            }else{
                resolve(info)
            }
        
         })
    })

    return promise

}   


module.exports = Mailer