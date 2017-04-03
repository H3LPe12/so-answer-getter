(function ()
{
    "use strict";

    angular.module("app-questions", ["ngRoute", "ngSanitize"])
        .config(function ($routeProvider) {
            $routeProvider.when("/", {
                controller: "questionsController",
                controllerAs: "viewModel",
                templateUrl: "/views/questionsView.html"
            });

            $routeProvider.when("/recent", {
                controller: "recentQuestionController",
                controllerAs: "viewModel",
                templateUrl: "/views/recentQuestionView.html"
            });

            $routeProvider.when("/guess/:questionId", {
                controller: "questionGuessController",
                controllerAs: "vm",
                templateUrl: "/views/questionGuessView.html"
            });

            $routeProvider.otherwise({ redirectTo: "/" });
        });
    
})();