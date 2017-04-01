using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace SoAnswerGetter.Services
{
    public class StackOverflowService : IStackOverflowService
    {
        private const string StackOverflowApiUrl = "https://api.stackexchange.com/2.2/questions?site=stackoverflow";

        
        public string GetQuestions()
        {
            return "";
        }

        public string GetQuestionWithAnswers(int questionId)
        {
            // Go to stack overflow API and call for question with answers
            var requestUrl = StackOverflowApiUrl + "";

            try
            {
                using (var request = new HttpClient())
                {
                    request.BaseAddress = new Uri(requestUrl);
                    //var response = await request.GetStringAsync();
                }
            }
            catch (Exception)
            {

                throw;
            }

            // pass output to angular
            return questionId.ToString();
        }


        public void SetAcceptedAnswerGuess(int questionId, int answerId)
        {
            throw new NotImplementedException();
        }
    }
}
