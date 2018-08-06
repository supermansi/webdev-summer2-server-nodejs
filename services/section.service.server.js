module.exports = function (app) {

    const sectionModel = require('../models/section/section.model.server')

    app.post('/api/section',
        addSection);

    app.get('/api/section',
        findAllSections);

    app.get('/api/course/:courseId/section',
        findSectionsForCourse);

    app.put('/api/section/:sectionId/enroll',
        enroll);

    function addSection(req, res) {
        sectionModel
            .createSection(req.body)
            .then(section => res.send(section));
        console.log(req.body);
    }

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
        var sectionId = req.params['sectionId'];
        sectionModel
            .enroll(req.session['currentUser']._id, sectionId)
            .then(status => res.sendStatus(200));
    }
}