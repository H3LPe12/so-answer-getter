(function ()
{
    "use strict";

    angular.module("app-questions")
        .controller("questionsController", questionsController);

    function questionsController($http, $scope, $sce){

        var viewModel = this; //question-list

        viewModel.Questions = [];
        viewModel.errorMessage = "";

        $scope.trustAsHtml = $sce.trustAsHtml;

        $http.get("https://api.stackexchange.com/2.2/questions?pagesize=100&order=desc&sort=activity&site=stackoverflow&filter=withbody")
            .then(function (response) {
                var objs = response.data.items;

                for (var i = 0; i < objs.length; i++) {
                    if (objs[i].accepted_answer_id && objs[i].answer_count > 1) {
                        viewModel.Questions.push(objs[i]);
                    };
                };
            }, function (error) {
                viewModel.errorMessage = "Failed to retrieve data: " + error;
            });
    };
})();