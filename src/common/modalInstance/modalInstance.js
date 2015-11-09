(function (module) {
    module.controller('ModalInstanceCtrl', function ($scope, $modalInstance, content) {
        $scope.id = content.id;
        $scope.answer = content.answer; //TODO-Lara: Add syntax highlighting
        $scope.codeString = content.code;

        $scope.close = function () {
            $modalInstance.close();
        };
    });
}(angular.module("modalInstance")));