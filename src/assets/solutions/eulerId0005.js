var solution = function () {
    var dividingNumberRange = 20;
    var numberToTest = 20; // Starting point for possible solutions should be biggest divisor
    var solutionFound = false;
    var solution;

    while (!solutionFound) {
        // Start testing at 10 for divisors, since 9 is covered in 18, 8 in 16, etc.
        for (var i = 10; i <= dividingNumberRange; i++) {
            if (numberToTest % i != 0) {
                numberToTest += 20; // Increase by 20, since every possible solution has to be divisible by 20
                break;
            } else if (i == dividingNumberRange && numberToTest % i == 0) {
                solutionFound = true;
                solution = numberToTest;
            }
        }
    }
    return solution;
};