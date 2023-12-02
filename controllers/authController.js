const Models = require("../database/models");
const bcrypt = require('bcrypt');
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');



// Admin Login
exports.login_post = async(req, res)=>{
    try {
        const admin = await Models.Admin.findOne({
            where:{
                email:req.body.email
            }
        })
        console.log(req.body)
        console.log("DB :: ",admin.password)
        if (admin && await bcrypt.compare(req.body.password, admin.password)) {
            const key = process.env.ACCESS_TOKEN_SECRET;
            const accessToken = jwt.sign({admin:admin.email}, key,{
                expiresIn: '30d'
            });
            return res.status(200).json({success:true,admin:admin.email, JWT_TOKEN: accessToken, message:"You have successfully logged in"})
        }
        return res.status(401).json({success:false, message:"Incorrect username or password"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message:`Something went wrong, Please try again later`});
    }
}

// // User Register
// exports.register_post = async(req, res)=>{
//     try {
//         // check if that user exists in the db
//         const player = await Models.Player.findOne({
//             where:{
//                 [Op.or]:[
//                     {email:req.body.email},
//                     {username:req.body.username}
//                 ]
//                 }});
//                 console.log("Player: ", player)
//             if (!player) {
//                 const hashedPassword = await bcrypt.hash(req.body.password, 10);
//                 await Models.Player.create({
//                 email: req.body.email,
//                 username: req.body.username,
//                 password: hashedPassword,
//             });
//             return res.status(201).json({success:true, message:`username: ${req.body.username} has been sucessfully registered`});
//             }
//             return res.status(409).json({success:false, message:"This email is already taken"})   


//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({success: false, message:`Something went wrong, Please try again later`});
//     }
// }
