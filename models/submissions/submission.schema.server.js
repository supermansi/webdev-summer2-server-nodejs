const mongoose = require('mongoose')
module.exports = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    answers: [{
        fillBlanksAsnwers: {
            variable: String,
            value: String
        },
        multipleChoiceAnswer: Number,
        trueFalseAnswer: Boolean,
        essayAnswer: String
    }],
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionModel'
    }
})