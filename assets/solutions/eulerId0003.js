var solution = function () {
    var dynamicTarget = 600851475143;
    var divisor;
    var largestPrimeFactor = 1;

    for (divisor = 2; dynamicTarget != 1; divisor++) {
        if (dynamicTarget % divisor == 0) {
            largestPrimeFactor = divisor;
            dynamicTarget = dynamicTarget / divisor;
        }
    }
    return largestPrimeFactor;
};