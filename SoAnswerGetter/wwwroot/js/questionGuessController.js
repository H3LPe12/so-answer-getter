(function () {
    "use strict";

    angular.module("app-questions")
        .controller("questionGuessController", questionGuessController);

    function questionGuessController($routeParams, $http) {
        var vm = this;

        vm.questionId = $routeParams.questionId;
        vm.Title = "";
        vm.Body = "";
        vm.Answers = [];

        vm.questionId = $routeParams.questionId;
        
        getQuestionInfo(vm, $http);
        getAnswers(vm, $http);
    }

    function getQuestionInfo(viewModel, $http) {

        $http.get("https://api.stackexchange.com/2.2/questions/"
            + viewModel.questionId
            + "?filter=withbody&site=stackoverflow")
            .then(function (response) {
                var item = {};
                item = response.data.items[0];

                viewModel.Title = item.title;
                viewModel.Body = item.body;
            });
    }

    function getAnswers(viewModel, $http) {
        $http.get("https://api.stackexchange.com/2.2/questions/"
            + viewModel.questionId
            + "/answers?filter=withbody&site=stackoverflow")
            .then(function (response) {
                viewModel.Answers = response.data.items;
            }, function (error) {

            });
    }
})();