(function () {
    "use strict";

    angular.module("app-questions")
        .controller("recentQuestionsController", recentQuestionsController);

    function recentQuestionsController($http, $scope, $sce) {

        var viewModel = this;

        viewModel.Questions = [];
        viewModel.errorMessage = "";

        $scope.trustAsHtml = $sce.trustAsHtml;

        getFromApi($http, viewModel);
    };

    function getFromApi(http, vm) {
        var entities = [];

        http.get("http://localhost:63880/api/recent")
            .then(function (response) {
                entities = response.data;
            }, function (error) {
                viewModel.errorMessage = "Failed to retrieve data: " + error;
            });

        var questionIdString = "";

        for (var i = 0; i < entities.length; i++) {
            questionIdString += entities[i].questionId;
        };

        http.get("https://api.stackexchange.com/2.2/questions/ " +
            questionIdString +
           "?pagesize=20&order=desc&sort=activity&site=stackoverflow&filter=withbody")
            .then(function (response) {
                var objs = response.data.items;

                for (var i = 0; i < objs.length; i++) {
                    vm.Questions.push(objs[i]);
                };
            }, function (error) {
                viewModel.errorMessage = "Failed to retrieve data: " + error;
            });
    };
})();