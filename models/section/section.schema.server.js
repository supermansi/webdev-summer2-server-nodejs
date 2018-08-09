var mongoose = require('mongoose');

var sectionSchema = mongoose.Schema({
    title: String,
    courseId: String,
    seats: Number
}, {collection: 'section'});

module.exports = sectionSchema;