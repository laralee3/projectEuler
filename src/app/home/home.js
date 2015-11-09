(function (module) {
    module.controller('HomeController', function ($scope, $modal) {
        var totalSolutions = 8; //TODO-Lara: Figure out how to do a file count for solutions
        $scope.solutionList = [];

        for (var i = 1; i <= totalSolutions; i++) {
            $scope.solutionList.push('eulerId' + _.padLeft(i, 4, '0'));
        }

        $scope.open = function (solutionId) {
            var solutionData = {};

            $.getScript("../assets/solutions/" + solutionId + ".js", function (data) {
                solutionData.id = solutionId;
                solutionData.code = data;
                solutionData.answer = solution();
            }).then(function () {
                $modal.open({
                    templateUrl: 'modalInstance/modalInstance.tpl.html',
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