const mongoose = require('mongoose')
const submissionSchema = require('./submission.schema.server')
const submissionModel = mongoose.model('SubmissionModel', submissionSchema)

createSubmission = (quizId, submission) =>
    findAllSubmissionsForQuiz(quizId)
        .then(submissionModel.create(submission))

findById = (quizId, submissionId) =>
    submissionModel.findById({
        _id: submissionId,
        quiz: quizId
    })

findAllSubmissions =() =>
    submissionModel.find()

findAllSubmissionsForStudent = studentId =>
    submissionModel.find({
        student: studentId
    })

findAllSubmissionsForQuiz = quizId =>
    submissionModel.find({
        quiz: quizId
    })

module.exports = {
    createSubmission,
    findById,
    findAllSubmissions,
    findAllSubmissionsForStudent,
    findAllSubmissionsForQuiz
}