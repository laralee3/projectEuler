// This is just a calculation of central binomial coefficients.
// https://en.wikipedia.org/wiki/Central_binomial_coefficient

var solution = function () {
    var target = 20;

    var factorial = function (number) {
        if (number == 0) {
            console.log('hit');
            return 1;
        } else {
            return (number * factorial(number - 1));
        }
    };

    var centralBinomialCoefficient = function (targetCbc) {
        return factorial(2 * targetCbc) / (factorial(targetCbc) * factorial(targetCbc));
    };

    return centralBinomialCoefficient(target);
};
