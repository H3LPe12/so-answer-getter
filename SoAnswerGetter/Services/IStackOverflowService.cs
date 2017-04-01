namespace SoAnswerGetter.Services
{
    public interface IStackOverflowService
    {
        string GetQuestions();

        string GetQuestionWithAnswers(int questionId);

        void SetAcceptedAnswerGuess(int questionId, int answerId);
    }
}
