using Microsoft.AspNetCore.Mvc;
using SoAnswerGetter.ViewModels;

namespace SoAnswerGetter.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult QuestionList()
        {
            return View();
        }

        public IActionResult Question()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Question(GuessViewModel vm)
        {
            return View();
        }
    }
}