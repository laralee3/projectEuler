(function (module) {
    module.controller('HomeController', function ($scope, $modal) {
        //TODO-Lara: Figure out how to do a file count for solutions
        //TODO-Lara: ADD UNIT TESTS
        var totalSolutions = 17;
        var scriptStart, scriptEnd;
        $scope.solutionList = [];
        $scope.loading = false;

        for (var i = 1; i <= totalSolutions; i++) {
            $scope.solutionList.push('eulerId' + _.padLeft(i, 4, '0'));
        }

        //TODO-Lara: Figure out why loading indicator isn't showing on first click
        //TODO-Lara: Add runtime

        $scope.open = function (solutionId) {
            $scope.loading = true;

            var solutionData = {};
            scriptStart = performance.now();

            //TODO-Lara: Fix reliability of loading animationAdd
            $.getScript("assets/solutions/" + solutionId + ".js", function (data) {
                solutionData.id = solutionId;
                solutionData.code = data;
                solutionData.answer = solution();

                scriptEnd = performance.now();

                solutionData.runTime = Math.round(scriptEnd - scriptStart);
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