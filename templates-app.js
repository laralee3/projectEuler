angular.module('templates-app', ['home/home.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div>\n" +
    "    <h1>Project Euler Solutions</h1>\n" +
    "\n" +
    "    <div class=\"highlight\">\n" +
    "        <p>My answers to the puzzles at <a href=\"https://projecteuler.net/\">Project Euler</a>, written in\n" +
    "            Javascript. Solution script is run on selection.</p>\n" +
    "\n" +
    "        <p><em>Runtime is a rough estimate only and calculated in browser when selected.</em></p>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"loading-indicator\">\n" +
    "        <span ng-show=\"loading\" class=\"glyphicon glyphicon-hourglass\">   Running...</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <p class=\"solution-buttons\">\n" +
    "        <button class=\"btn btn-primary euler-button\"\n" +
    "                ng-repeat=\"solution in solutionList\"\n" +
    "                ng-click=\"open(solution)\">{{ solution }}\n" +
    "        </button>\n" +
    "    </p>\n" +
    "</div>\n" +
    "");
}]);
