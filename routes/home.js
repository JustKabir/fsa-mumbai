const express = require('express');
const router = express.Router();

//Controllers 
const homeController = require('../controllers/homeController');

// Routes
router.get('/brand/:companyId', homeController.singleCompany_get);
router.get('/', homeController.homePageData_post)
module.exports = router;
