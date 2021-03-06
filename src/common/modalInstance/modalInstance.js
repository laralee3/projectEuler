(function (module) {
    module.controller('ModalInstanceCtrl', function ($scope, $modalInstance, content) {
        $scope.id = content.id;
        $scope.answer = content.answer;
        $scope.codeString = content.code;
        $scope.runTime = content.runTime;

        $scope.close = function () {
            $modalInstance.close();
        };
    });
}(angular.module("modalInstance")));