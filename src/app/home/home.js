(function (module) {
    module.controller('HomeController', function ($scope) {
        $scope.testEulerId0001 = function () {
            $.getScript("../assets/eulerId0001.js", function (data, textStatus, jqxhr) {
                $scope.codeString = data;
                alert(eulerId0001());
            });
        };
        $scope.codeString = $scope.codeString;
    });
}(angular.module("projectEuler.home")));