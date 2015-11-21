// It's a bit of a cheat how I saved run time here. After finding the answer running this
// the first time with textMax starting at 1, I set it to a much higher number to save myself cycles.
// Surprisingly the difference in runtime on Chrome is pretty minimal, so I don't really feel
// that guilty. Definitely could be optimized in the future though; binary search for a ballpark?

var solution = function () {
    var targetDivisors = 500;
    var testTriangleNumber = 0;
    var testMax = 10000;
    var testNumberOfDivisors = 0;
    var divisors, i, limit, sum;

    var findTriangleNumber = function (maximum) {
        sum = 0;
        for (i = 1; i <= maximum; i++) {
            sum += i;
        }
        return sum;
    };

    var findDivisors = function (triangleNumber) {
        divisors = [1, triangleNumber];
        limit = triangleNumber;

        for (i = 2; i < limit; i++) {
            if (triangleNumber % i == 0) {
                limit = triangleNumber / i;
                divisors.push(i, limit);
            }
        }

        return divisors; // No reason this needs to be in order
    };

    var numberOfDivisors = function (array) {
        return array.length;
    };

    while (testNumberOfDivisors <= targetDivisors) {
        testMax++;

        testTriangleNumber = findTriangleNumber(testMax);
        testNumberOfDivisors = numberOfDivisors(findDivisors(testTriangleNumber));
    }

    return testTriangleNumber;
};