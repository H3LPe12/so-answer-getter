using System.Collections.Generic;

namespace SoAnswerGetter.Models
{
    public interface IAnswerGetterRepository
    {
        IEnumerable<Guess> GetAllGuesses();
        void SaveGuess(Guess guess);

    }
}