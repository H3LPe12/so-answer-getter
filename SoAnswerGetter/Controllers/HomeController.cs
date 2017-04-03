using Microsoft.AspNetCore.Mvc;
using SoAnswerGetter.Models;
using SoAnswerGetter.ViewModels;

namespace SoAnswerGetter.Controllers
{
    public class HomeController : Controller
    {
        private AnswerGuesserContext _context;

        public HomeController(AnswerGuesserContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult QuestionList()
        {
            return View();
        }

        public IActionResult RecentQuestions()
        {
            return View();
        }
    }
}