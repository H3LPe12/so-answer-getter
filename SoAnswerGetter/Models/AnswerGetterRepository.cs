using System.Collections.Generic;
using System.Linq;

namespace SoAnswerGetter.Models
{
    public class AnswerGetterRepository : IAnswerGetterRepository
    {
        private AnswerGuesserContext _context;

        public AnswerGetterRepository(AnswerGuesserContext context)
        {
            _context = context;
        }

        public IEnumerable<Guess> GetAllGuesses()
        {
            return _context.Guesses.ToList();
        }

        public void SaveGuess(Guess guess)
        {
            _context.Guesses.Add(guess);
            _context.SaveChanges();
        }
    }
}
