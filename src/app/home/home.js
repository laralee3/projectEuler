(function (module) {
    module.controller('HomeController', function ($scope, $modal) {
        $scope.testEulerId0001 = function () {
            $.getScript("../assets/eulerId0001.js", function (data, textStatus, jqxhr) {
                $scope.codeString = data;
                alert(eulerId0001());
            });
        };

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'Modal/Modal.tpl.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
            });
        };
    });
}(angular.module("projectEuler.home")));