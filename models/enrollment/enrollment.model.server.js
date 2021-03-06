var mongoose = require('mongoose');
var enrollmentSchema = require('./enrollment.schema.server');
var enrollmentModel = mongoose.model('EnrollmentModel', enrollmentSchema);

function enrollStudentInSection(studentId, sectionId) {
    var enrollment = {
        studentId: studentId,
        sectionId: sectionId
    };
    //console.log(enrollment);
    return enrollmentModel.create(enrollment);
}

function deleteEnrollment(studentId, sectionId) {
    return enrollmentModel.remove({
        _id: userId
    });

}

function findSectionsForStudent(studentId) {
    return enrollmentModel
        .find({student: studentId})
        .populate('section')
        .exec();
}
/*
function findStudentsForSection(sectionId) {
    return enrollmentModel
        .find({section: sectionId})
        .populate('student')
        .exec();
}*/

module.exports = {
    enrollStudentInSection,
    deleteEnrollment,
    findSectionsForStudent
}