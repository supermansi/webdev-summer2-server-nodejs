module.exports = function (app) {

    var enrollmentModel = require('../models/enrollment/enrollment.model.server');

    function enrollStudentInSection(req, res) {
        enrollmentModel
            .enrollStudentInSection(
                req.params['studentId'])
            .then(function (enrollment) {
                console.log(enrollment);
                res.send(enrollment);
                }
            );
    }

    test = (req, res) => {
        var studentId = req.params['studentId'];
        var sectionId = req.params['sectionId'];
        enrollmentModel.findSectionsForStudent(studentId, sectionId)
        res.send(studentId + " " + sectionId);
    }
    
    function findSectionsForStudent(req, res) {
        res.send('here!');
    }
/*        var studentId = req.params['studentId'];
        enrollmentModel
            .findSectionsForStudent(studentId)
            .then(sections => res.send(sections));
    }
    */

    function deleteEnrollment(req, res) {
        var studentId = req.params['studentId'];
        var sectionId = req.params['sectionId'];
        enrollmentModel
            .deleteEnrollment(studentId, sectionId)
            .then(status => {
                console.log(status);
                res.sendStatus(200)
            });
    }

    app.post('/api/student/:studentId/section/:sectionId',
        enrollStudentInSection);

    app.get('/api/student/:studentId/section',
        findSectionsForStudent);

    app.delete('/api/student/:studentId/section/:sectionId',
        deleteEnrollment);

    app.get('/api/student/:studentId/sections/:sectionId',
        test);

};
