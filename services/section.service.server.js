module.exports = function (app) {

    const sectionModel = require('../models/section/section.model.server')

    function addSection(req, res) {
        sectionModel
            .createSection(req.body)
            .then(section => res.send(section));
        console.log(req.body);
    }

    // function addSectionForCourse(req, res) {
    //     sectionModel.
    // }

    function findAllSections(req, res) {
        sectionModel
            .findAllSections()
            .then(sections => res.send(sections));
    }

    function findSectionsForCourse(req, res) {
        var courseId = req.params['courseId'];
        sectionModel
            .findSectionsForCourse(courseId)
            .then(sections => res.send(sections));
    }

    function enroll(req, res) {
        // var sectionId = req.params['sectionId'];
        var sectionId = req.params['sid'];
        var studentId = req.params['kid'];

       /* var enrollment = {
            studentId,

        }*/
        sectionModel
            // .enroll(req.session['currentUser']._id, sectionId)
            .enroll(studentId, sectionId)
            .then(status => res.sendStatus(status));
    }

    function findAllSectionsForStudent(req, res) {
        var studentId = req.params['sid'];
        sectionModel
            .findAllSectionsForStudent(studentId)
    }

    function deleteSection(req, res) {
        var sectionId = req.params['sectionId'];
        sectionModel
            .deleteSection(sectionId)
            .then(status => {
                console.log(status);
                res.sendStatus(200)
            });
    }

    app.post('/api/section',
        addSection);

    app.get('/api/section',
        findAllSections);

    app.get('/api/course/:courseId/section',
        findSectionsForCourse)

     app.put('/api/section/:sectionId/enroll',
        enroll);

/*    app.post('/api/student/:sid/section/:kid',
        enroll);*/

    app.get('/api/student/:sid/section',
        findAllSectionsForStudent);

    app.delete('/api/section/:sectionId',
        deleteSection);

    // app.post('/api/course/:courseId/section',
    //     addSectionForCourse);
};
