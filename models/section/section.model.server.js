var mongoose = require('mongoose');
var sectionSchema = require('./section.schema.server');

var sectionModel = mongoose.model('SectionModel', sectionSchema);

// CRUD operations on Sections

createSection = section =>
    sectionModel.create(section);

findAllSections = () =>
    sectionModel.find();

findSectionsForCourse = (courseId) =>
    sectionModel.find({courseId: courseId});

module.exports = {
    createSection,
    findAllSections,
    findSectionsForCourse
}