const Models = require("../database/models");
const bcrypt = require('bcrypt');
const { Op, Sequelize } = require("sequelize");
const jwt = require('jsonwebtoken');



// fetch Single Company
exports.singleCompany_get = async (req, res) => {
  try {
    // check if the company exists 
    const companyId = req.params.companyId;

    // Fetch the company from the database
    const company = await Models.Company.findByPk(companyId);
    if (!company) {
      return res.status(404).json({ success: false, message: "Brand does not exists" })
    }
    return res.status(200).json({ success: true, data: company })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: `Something went wrong, Please try again later` });
  }
}

// fetch and filter 
exports.homePageData_post = async (req, res) => {

  try {
    // Pagination parameters
    const { page = 1, pageSize = 10 } = req.query;
    const offset = (page - 1) * pageSize;
    // Filter parameters
    const { filters } = req.query;
    const filterObj = filters ? JSON.parse(filters) : {};
    // Construct the where clause for filtering
    const whereClause = {};
    for (const [key, values] of Object.entries(filterObj)) {
      if (Array.isArray(values) && values.length > 0) {
        whereClause[key] = {
          [Op.overlap]: values,
        };
      }
    }
    // Fetch paginated and filtered data
    const result = await Models.Company.findAll({
      where: whereClause,
      offset,
      limit: pageSize,
    });
    // Count the total number of entries for the given filters
    const totalCount = await Models.Company.count({ where: whereClause });
    // Calculate the total number of pages
    const totalPages = Math.ceil(totalCount / pageSize);
    res.json({
      data: result,
      totalPages,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}
