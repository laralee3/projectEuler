var solution = function () {
    var dividingNumberRange = 20;
    var numberToTest = 1;
    var solutionFound = false;
    var solution;

    while (!solutionFound) {
        for (var i = 2; i <= dividingNumberRange; i++) {
            if (numberToTest % i != 0) {
                numberToTest++;
                break;
            } else if (i == dividingNumberRange && numberToTest % i == 0) {
                solutionFound = true;
                solution = numberToTest;
            }
        }
    }
    return solution;
};