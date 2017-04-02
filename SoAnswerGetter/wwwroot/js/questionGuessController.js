(function () {
    "use strict";

    angular.module("app-questions")
        .controller("questionGuessController", questionGuessController);

    function questionGuessController($routeParams, $http, $scope) {
        var vm = this;

        vm.Guess = {};

        $scope.saveGuess = function () {

            if (vm.Guess.is_accepted === "true") {
                alert("Correct!!!!");
            } else {
                alert("Awwww :( Incorrect");
            }
            alert(vm.Guess.answer_id);

            storeGuess(vm, $http);
        };

        vm.questionId = $routeParams.questionId;
        vm.Title = "";
        vm.Body = "";
        vm.Answers = [];
        
        vm.questionId = $routeParams.questionId;

        getQuestionInfo(vm, $http);
        getAnswers(vm, $http);

    }

    function getQuestionInfo(viewModel, http) {

        http.get("https://api.stackexchange.com/2.2/questions/"
            + viewModel.questionId
            + "?filter=withbody&site=stackoverflow")
            .then(function (response) {
                var item = {};
                item = response.data.items[0];

                viewModel.Title = item.title;
                viewModel.Body = item.body;
            });
    }

    function getAnswers(viewModel, http) {
        http.get("https://api.stackexchange.com/2.2/questions/"
            + viewModel.questionId
            + "/answers?filter=withbody&site=stackoverflow")
            .then(function (response) {
                viewModel.Answers = response.data.items;
            }, function (error) {

            });
    }

    function storeGuess(viewModel, http) {
        var guessVm = {
            questionId: viewModel.questionId,
            answerId: viewModel.Guess.answer_id
        };

        http.post("http://localhost:63880/api/save", guessVm)
            .then(function (response) {
                // we did it.
                alert("Successfully wrote vm");
            }, function (error) {
                // something awful happened
                alert("Failed to write vm");
            });
    }
})();