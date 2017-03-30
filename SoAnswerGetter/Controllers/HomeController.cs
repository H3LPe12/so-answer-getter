using Microsoft.AspNetCore.Mvc;

namespace SoAnswerGetter.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Guess the Accepted Answer to the Question";

            return View();
        }

        public IActionResult QuestionList()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
