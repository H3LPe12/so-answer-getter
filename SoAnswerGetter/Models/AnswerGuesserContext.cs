using Microsoft.EntityFrameworkCore;

namespace SoAnswerGetter.Models
{
    public class AnswerGuesserContext : DbContext
    {
        public AnswerGuesserContext(DbContextOptions options) : base(options) {}

        public DbSet<Guess> Guesses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=SoAnswerGetterDb;Trusted_Connection=true;MultipleActiveResultSets=true;");
        }
    }
}
