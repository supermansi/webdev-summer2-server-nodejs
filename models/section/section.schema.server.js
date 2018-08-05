var mongoose = require('mongoose');

var sectionSchema = mongoose.Schema({
    title: String,
    courseId: String
}, {collection: 'section'});

module.exports = sectionSchema;