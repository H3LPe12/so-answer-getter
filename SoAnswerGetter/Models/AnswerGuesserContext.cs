using Microsoft.EntityFrameworkCore;

namespace SoAnswerGetter.Models
{
    public class AnswerGuesserContext : DbContext
    {
        public AnswerGuesserContext() { }

        public DbSet<Guess> Guesses { get; set; }
    }
}
