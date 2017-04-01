(function () {
    "use strict";

    angular.module("app-questions")
        .controller("questionController", function ($scope, $http) {
            var viewModel = this;

            $scope.$watch("selectedQuestion", function () {
                fetch();
            });

            viewModel.Question_id = $scope.selectedQuestion;
            viewModel.Title = "";
            viewModel.Body = "";
            viewModel.Answers = {};

            $scope.$watch("selectedQuestion", function () {
                fetch();
            });

            function fetch() {
                $http.get("https://api.stackexchange.com/2.2/questions/" + $scope.selectedQuestion + "?filter=withbody")
                    .then(function (response) {

                    });
            }
        });
})();