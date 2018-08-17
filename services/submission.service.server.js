module.exports = app => {

    const submissionModel = require('../models/submissions/submission.model.serve');

    findAllSubmissions = (req, res) => {
        submissionModel.findAllSubmissionsForQuiz(req.params['quizId'])
            .then(submissions => {
                console.log(submissions);
                res.json(submissions);
            })
    }

    findSubmissionById = (req, res) => {
        submissionModel.findById(req.params['quizId'], req.params['submission'])
            .then(submissions => res.send(submissions))
    }

    createSubmission = (req, res) => {
        submissionModel.createSubmission(req.params['quizId'], req.body)
            .then(submission => res.send(submission))
    }

    findSubById = (req, res) => {
        submissionModel.findSubById(req.params['subId'])
            .then(submission => res.send(submission))
    }

    app.get('/api/quiz/:quizId/submission',
        findAllSubmissions);

    app.get('/api/quiz/:quizId/submission/:submissionId',
        findSubmissionById);

    app.get('/api')

    app.post('/api/quiz/:quizId/submission',
        createSubmission);

    app.get('/api/sub/:subId',
        findSubById);



}