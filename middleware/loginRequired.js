require('dotenv').config();
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET
// const Employee = require("../models/company/branch/employee/employee");
const Models = require("../database/models");
module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers
    // console.log(`AUTHORIZATION: ${authorization}`)
    if (!authorization) {
      return res.status(401).json({ message: "You must be logged in" })
    }
    const token = authorization.replace("Bearer ", "")
    console.log(`TOKEN: ${token}`)
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if (err) {
        return res.status(401).json({ message: "You must be logged in" })
      }
      const { admin } = payload
      // console.log(player)
      // console.log(player)
      Models.Admin.findOne({ where: { email: admin } }).then(adminData => {
        console.log("ADMIN DATA :: ", adminData)
        req.admin = adminData.email
        next()
      }).catch((err) => {
        console.log(err)
        return res.status(404).json({ success: false, message: `loginRequired, Inappropriate JWT` });
      })
    })
  } catch (error) {
    console.error(error);
    return res.status(404).json({ success: false, message: `loginRequired, Something Went Wrong` });
  }
}