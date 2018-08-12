const mongoose = require('mongoose');
const quizSchema = require('./quiz.schema.server');
const quizModel = mongoose.model('QuizModel', quizSchema);

createQuiz = (quiz) => {
    console.log(quiz);
    return quizModel.create(quiz);
}

findAllQuizzes = () =>
    quizModel.find();

findQuizById = quizId =>
    quizModel
        .findById(quizId)
        .populate('questions')  // retrieve all the objects that are referenced
        .exec();

updateQuiz = (quizId, newQuiz) =>
    quizModel.update({ _id: quizId},
        {$set: newQuiz}
        );

addQuestion = (quizId, questionId) =>
    quizModel.update({_id: quizId},
        {$push: {questions: questionId}
        })

deleteQuiz = quizId =>
    quizModel.remove({_id: quizId});

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz,
    addQuestion
};