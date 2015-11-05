(function (module) {
    module.controller('HomeController', function ($scope, $modal) {
        $scope.open = function (solutionId) {
            var solutionData = {};

            $.getScript("../assets/solutions/" + solutionId + ".js", function (data) {
                solutionData.id = solutionId;
                solutionData.code = data;
                solutionData.answer = solution();
            }).then(function () {
                $modal.open({
                    templateUrl: 'Modal/Modal.tpl.html',
                    controller: 'ModalInstanceCtrl',
                    size: 'lg',
                    resolve: {
                        content: function () {
                            return solutionData;
                        }
                    }
                });
            });
        };
    });
}(angular.module("projectEuler.home")));