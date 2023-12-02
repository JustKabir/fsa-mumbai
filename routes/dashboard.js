const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Models = require("../database/models");


//Controllers 
const dashboardController = require('../controllers/dashboardController');

// middleware
const loginRequired = require('../middleware/loginRequired')

// const upload = multer({
//     storage: multer.memoryStorage(), // Use memory storage to get Buffer of the file instead of saving it to disk
//     limits: { files: 5 } 
//   });

//   // Routes
//   router.post('/create', upload.array('images', 5), async (req, res) => {
//     try {
//       console.log(req.body);
//       const { brand_name, description, year_of_establishment, address, contact1_name, contact1_phone, contact2_name, contact2_phone, men, women, boys, girls, fabric_type, yarn_used, variant_brand1_name, variant_brand2_name, variant_brand3_name, variant_brand4_name } = req.body;

//       // Convert images to base64
//       const imageBase64Array = req.files.map(file => {
//         const base64 = file.buffer.toString('base64');
//         return `data:${file.mimetype};base64,${base64}`;
//       });

//       const company = await Models.Company.create({
//         brand_name,
//         brand_image: imageBase64Array[0],
//         description,
//         year_of_establishment,
//         address,
//         contact1_name,
//         contact1_phone,
//         contact2_name,
//         contact2_phone,
//         men,
//         women,
//         boys,
//         girls,
//         fabric_type,
//         yarn_used,
//         variant_brand1_name,
//         variant_brand1_image: imageBase64Array[1],
//         variant_brand2_name,
//         variant_brand2_image: imageBase64Array[2],
//         variant_brand3_name,
//         variant_brand3_image: imageBase64Array[3],
//         variant_brand4_name,
//         variant_brand4_image: imageBase64Array[4]
//       });

//       return res.status(200).json({ success: true, message: `${brand_name} has been registered successfully` });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ success: false, message: `Something went wrong, Please try again later ${error}` });
//     }
//   });
router.post('/create', loginRequired, dashboardController.createCompany_post);
router.put('/edit/:companyId', loginRequired, dashboardController.editCompany_put);
router.delete('/delete/:companyId', loginRequired, dashboardController.deleteCompany_delete);


module.exports = router;