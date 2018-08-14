module.exports = app => {
    const questionModel = require('../models/questions/question.model.server')

    createQuestion = (req, res) =>
        questionModel.createQuestion(req.body)
            .then(question => res.json(question),
                error => res.send(error));

    findAllQuestions = (req, res) =>
        questionModel.findAllQuestions(req.body)
            .then(questions => res.send(questions));

    deleteQuestion = (req, res) =>
        questionModel.deleteQuestion(req.params['questionId'])
            .then(status => res.send(status));

    updateQuestion = (req, res) =>
        questionModel.updateQuestion(req.params['questionId'], req.body)
            .then(status => res.send(status));

    app.post('/api/question',
        createQuestion);

    app.get('/api/question',
        findAllQuestions);

    app.delete('/api/question/:questionId',
        deleteQuestion);

    app.put('/api/question/:questionId',
        updateQuestion);
}