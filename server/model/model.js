const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        requird:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    ftornci: String,
    status: String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;