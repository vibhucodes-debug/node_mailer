const router = require("express").Router()
const addUser = require("../controllers/user_controllers/addUser.js")
const getUser = require("../controllers/user_controllers/getUser.js")
const updateUser = require("../controllers/user_controllers/updateUser.js")
const deleteUser = require("../controllers/user_controllers/deleteUser.js")
const authenticateUser = require("../controllers/user_controllers/authenticateUser.js")
const getAllUsers = require("../controllers/user_controllers/getAllUsers.js")
const Mailer = require("../utils/Mailer.js")
const confirmOtp = require("../controllers/user_controllers/confirmOtp.js")

router.post("/",addUser)            // Create
router.get("/",getUser)             // Read
router.get("/all",getAllUsers) 
router.get("/authenticate",authenticateUser)
router.put("/",updateUser)          // Update
router.delete("/",deleteUser)       // Delete
router.post("/mailer",Mailer)
router.post("/otp",confirmOtp)
module.exports = router

 