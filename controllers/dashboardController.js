const Models = require("../database/models");

// create company
exports.createCompany_post = async (req, res) => {
  try {
    const company = await Models.Company.create(req.body)
    console.log(req.body)

    return res.status(200).json({ success: true, message: `${req.body.brand_name} has been registered successfully` })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: `Something went wrong, Please try again later` });
  }
}

// Edit Company
exports.editCompany_put = async (req, res) => {
  try {
    //check if the company exists
    const company = await Models.Company.findOne({
      where: { id: req.params.companyId }
    });
    if (!company) {
      return req.res.status(400).json({ success: false, message: "The entry you are trying to update does not exist" })
    }
    // Updating
    await Models.Company.update(req.body, { where: { id: req.params.companyId } })
    return res.status(200).json({ success: true, message: "Details have been successfully updated" })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message: `Something went wrong, Please try again later` });
  }
}

// Delete Company
exports.deleteCompany_delete = async (req, res) => {
  try {
    console.log("I am inside delete")
    // check if the company exists
    const company = await Models.Company.findOne({
      where: { id: req.params.companyId }
    })
    if (!company) {
      return req.res.status(400).json({ success: false, message: "The entry you are trying to delete does not exist" })
    }
    await Models.Company.destroy({
      where: {
        id: req.params.companyId
      },
    });
    return res.status(200).json({ success: true, message: `${company.brand_name} has been deleted successfully` })

  } catch (error) {
    console.log("Error", error)
    return res.status(500).json({ success: false, message: "Something went wrong, please try again later" })
  }
}


