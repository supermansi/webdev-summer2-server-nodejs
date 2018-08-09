module.exports = function(app) {

    var enrollmentModel = require('../enrollment/en');

    function enrollStudentInSection(req, res) {
        enrollmentModel
            .enrollStudentInSection(
                req.params['studentId'],
                req.params['sectionId'])
            .then(function (enrollment) {
                console.log(enrollment);
                res.send(enrollment);
                }
            );
    }

    app.post('/api/student/:studentId/section/:sectionId',
        enrollStudentInSection);
};
