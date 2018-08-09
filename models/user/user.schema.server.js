var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    phone: Number,
    email: String,
    address: String,
    sections: [{type: mongoose.Schema.Types.ObjectId, ref: 'SectionModel'}]
},  {collection: 'user'});

module.exports = userSchema;
