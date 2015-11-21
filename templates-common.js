angular.module('templates-common', ['modalInstance/modalInstance.tpl.html']);

angular.module("modalInstance/modalInstance.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modalInstance/modalInstance.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <h2 class=\"modal-title\">Solution to {{ id }}</h2>\n" +
    "</div>\n" +
    "<div class=\"modal-body language-javascript\">\n" +
    "    <div>\n" +
    "        <h3>Answer | Runtime:</h3>\n" +
    "        <pre class=\"euler-answer\"><code prism>{{ answer }} | {{ runTime }}ms</code></pre>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "        <h3>Code:</h3>\n" +
    "        <pre class=\"euler-answer\"><code prism>{{ codeString }}</code></pre>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary euler-button\" ng-click=\"close()\">Close</button>\n" +
    "</div>");
}]);
