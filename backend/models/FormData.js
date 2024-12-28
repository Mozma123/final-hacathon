// const mongoose = require('mongoose');

// const FormDataSchema = new mongoose.Schema({
//     name : String,
//     email: String,
//     password: String
// })

// const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);

// module.exports = FormDataModel;





// // contact
const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    message: String, // New field for contact form message
});

const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);

module.exports = FormDataModel;
