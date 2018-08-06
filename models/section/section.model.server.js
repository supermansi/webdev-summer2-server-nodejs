var mongoose = require('mongoose');
var sectionSchema = require('./section.schema.server');

var sectionModel = mongoose.model('SectionModel', sectionSchema);
var userModel = require('../user/user.model.server');

// CRUD operations on Sections

createSection = section =>
    sectionModel.create(section);

findAllSections = () =>
    sectionModel.find();

findSectionsForCourse = (courseId) =>
    sectionModel.find({courseId: courseId});

enroll = (userId, sectionId) => {
    userModel.findUserById(userId)
        .then(user => {
            user.sections.push(sectionId)
            return user.save();
        });

}

module.exports = {
    createSection,
    findAllSections,
    findSectionsForCourse
}