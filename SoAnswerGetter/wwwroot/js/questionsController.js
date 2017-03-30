(function ()
{
    "use strict";

    angular.module("app-questions")
        .controller("questionsController", function ($http) {
            var viewModel = this;
            viewModel.Questions = {};

            $http.get("https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow&accepted_answer_id!=&answer_count>1&filter=withbody")
                .then(function (response) {
                    viewModel.Questions = response.data.items;
                });
        });
})();