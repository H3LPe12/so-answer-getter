(function ()
{
    "use strict";

    angular.module("app-questions", ["ngRoute"])
        .config(function ($routeProvider) {
            $routeProvider.when("/", {
                controller: "questionsController",
                controllerAs: "vm",
                templateUrl: "/views/questionsView.html"
            });

            $routeProvider.when("/guess", {
                controller: "questionGuessController",
                controllerAs: "vm",
                templateUrl: "/views/questionGuessView.html"
            });

            $routeProvider.otherwise({ redirectTo: "/" });
        });
    
})();