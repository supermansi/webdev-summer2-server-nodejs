const mongoose = require('mongoose');
const questionSchema = require('./questions.schema.server');
const questionModel = mongoose.model('QuestionModel', questionSchema);

createQuestion = question =>
    questionModel.create(question);

findAllQuestions = () =>
    questionModel.find();

findQuestionById = questionId =>
    questionModel.findById(questionId);

updateQuestion = (questionId, question) =>
    questionModel.update({_id: questionId},
        {$set: question});

deleteQuestion = questionId =>
    questionModel.remove({_id: questionId});

module.exports = {
    createQuestion,
    findAllQuestions,
    findQuestionById,
    updateQuestion,
    deleteQuestion
};