using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SoAnswerGetter.Models;
using SoAnswerGetter.ViewModels;
using System.Collections.Generic;

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
            //var questions = _repository.GetAllGuesses();
            //return Ok(Mapper.Map<IEnumerable<GuessViewModel>>(questions));
            return Ok(new List<Guess> { new Guess { Id = 1, QuestionId = 1, AnswerId = 1 }, new Guess { Id = 2, QuestionId = 2, AnswerId = 2 } });
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
