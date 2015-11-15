(function (module) {
    module.controller('HomeController', function ($scope, $modal) {
        //TODO-Lara: Figure out how to do a file count for solutions
        //TODO-Lara: ADD UNIT TESTS
        var totalSolutions = 13;
        $scope.solutionList = [];

        for (var i = 1; i <= totalSolutions; i++) {
            $scope.solutionList.push('eulerId' + _.padLeft(i, 4, '0'));
        }

        $scope.open = function (solutionId) {
            var solutionData = {};
            $scope.loading = true;

            //TODO-Lara: Move Loading animation to better location
            $.getScript("../assets/solutions/" + solutionId + ".js", function (data) {
                solutionData.id = solutionId;
                solutionData.code = data;
                solutionData.answer = solution();
            }).then(function () {
                $scope.loading = false;

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