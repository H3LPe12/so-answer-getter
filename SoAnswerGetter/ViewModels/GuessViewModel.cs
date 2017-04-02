using System.ComponentModel.DataAnnotations;

namespace SoAnswerGetter.ViewModels
{
    public class GuessViewModel
    {
        [Required]
        public int QuestionId { get; set; }
        [Required]
        public int AnswerId { get; set; }
    }
}
