(function (module) {
    module.directive('prism', function () {
        return {
            restrict: 'A',
            link: function ($scope, element) {
                element.ready(function () {
                    Prism.highlightElement(element[0]);
                });
            }
        };
    });
}(angular.module("prismDirective")));