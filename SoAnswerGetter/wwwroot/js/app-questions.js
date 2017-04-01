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

            $routeProvider.otherwise({ redirectTo: "/" });
        });
    
})();