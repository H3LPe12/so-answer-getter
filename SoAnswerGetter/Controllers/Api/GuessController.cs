using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SoAnswerGetter.Models;
using SoAnswerGetter.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace SoAnswerGetter.Controllers.Api
{
    public class GuessController : Controller
    {
        private IAnswerGetterRepository _repository;

        public GuessController(IAnswerGetterRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("api/recent")]
        public IActionResult GetRecentGuesses()
        {
            var questions = _repository.GetAllGuesses();
            var filtered = questions.Where(g =>
                                   questions.Where(b => b.QuestionId == g.QuestionId)
                                       .OrderByDescending(i => i.Id)
                                       .Take(20)
                                       .Select(s => s.Id)
                                   .Contains(g.Id)
                                ).OrderByDescending(d => d.Id);

            return Ok(Mapper.Map<IEnumerable<GuessViewModel>>(filtered));
        }

        [HttpPost("api/save")]
        public IActionResult SaveGuess([FromBody]GuessViewModel guess)
        {
            if (ModelState.IsValid)
            {
                var entity = Mapper.Map<Guess>(guess);
                _repository.SaveGuess(entity);

                return Created($"api/guess/save", guess);
            }
            return BadRequest("An error occured. Something was incorrect about the data: " + ModelState);
        }
    }
}
