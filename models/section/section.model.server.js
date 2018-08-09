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
            user.sections.push(sectionId);
            return user.save();
        });

}

deleteSection = (sectionId) => {
    console.log(sectionId);
    return sectionModel.remove({
        _id: sectionId
    });
}

findAllSectionsForStudent = (studentId) =>
    userModel.findUserById(studentId)
        .then(user => {
            return user.sections;
        })

decrementSeats = (sectionId) => {
    return sectionModel
        .update({
            _id: sectionId
        }, {
            $inc: {seats: -1}
        });
}

incrementSeats = (sectionId) => {
    return sectionModel
        .update({
            _id: sectionId
        }, {
            $inc: {seats: +1}
        });
}

module.exports = {
    createSection,
    enroll,
    findAllSections,
    findSectionsForCourse,
    findAllSectionsForStudent,
    deleteSection,
    decrementSeats,
    incrementSeats
}