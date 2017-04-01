(function () {
    "use strict";

    angular.module("app-questions")
        .controller("questionGuessController", questionGuessController($scope, $http));

        function questionGuessController($scope, $http) {
            var viewModel = this;

            $scope.$watch("selectedQuestion", function () {
                fetch();
            });

            var questionObj = $scope.selectedQuestion;

            viewModel.Question_id = questionObj.Question_id;
            viewModel.Title = questionObj.Title;
            viewModel.Body = questionObj.Body;
            viewModel.Answers = {};

            $scope.$watch("selectedQuestion", function () {
                fetch();
            });

            function fetch() {
                $http.get("https://api.stackexchange.com/2.2/questions/" + $scope.selectedQuestion + "/answers?filter=withbody&stie=stackoverflow")
                    .then(function (response) {
                        viewModel.Answers = response.data.items;
                    });
            }
        }
})();