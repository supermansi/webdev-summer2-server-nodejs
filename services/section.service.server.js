module.exports = function (app) {

    const sectionModel = require('../models/section/section.model.server')

    app.post('/api/section',
        addSection);

    app.get('/api/section',
        findAllSections);

    app.get('/api/course/:courseId/section',
        findSectionsForCourse);

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
}