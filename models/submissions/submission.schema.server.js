const mongoose = require('mongoose')
module.exports = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    answers: [{
        fillBlanksAnswers: {
            variable: String,
            value: String
        },
        multipleChoiceAnswer: Number,
        trueFalseAnswer: Boolean,
        essayAnswer: String
    }],
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    }],
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuizModel'
    }
}, {collection: 'submission'})