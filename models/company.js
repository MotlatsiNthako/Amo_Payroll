const mongoose = require("mongoose");

const  companySchema = new mongoose.Schema({
  CompanyName: {
    type: String,
    required: true,
    unique: true
  },
  CompanyIndustry: {
    type: String,
    required: true
  },
  CompanyLocation: {
    type: String,
    required: true
  },
  CompanyLogo: {
      type: String
  },
  PayrollDate: {
    type: Date,
    required: true
  },
  CompanyContract: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Company', companySchema)