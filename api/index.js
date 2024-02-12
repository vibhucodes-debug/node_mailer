
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const dotenv = require("dotenv")
dotenv.config()

app.use(express.json())

const userRoute = require("./routes/userRoutes.js")

const PORT = process.env.PORT || 5000

app.use("/apiv1",userRoute)

const dbConnection = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        app.listen(PORT,()=>{
            console.log(`Server is running on PORT : ${PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}

dbConnection()
