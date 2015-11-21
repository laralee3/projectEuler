// Borrows ideas from solution to euler 13. This calculates the solution
// into an array backwards; it's computationally more expensive to unshift
// an entire array versus pushing additional items, and the array being backwards
// has no effect on the sum.

var solution = function () {
    var solutionArray = [2];
    var limit = 1000;
    var carryTheOne;
    var calcLimit, i, j, tempProduct;

    var grabTensPlace = function (product) {
        return Math.floor(product / 10);
    };

    var grabOnesPlace = function (product) {
        return product % 10;
    };

    for (i = 1; i < limit; i++) {
        carryTheOne = 0;

        calcLimit = solutionArray.length;
        for (j = 0; j < calcLimit; j++) {
            tempProduct = solutionArray[j] * 2;

            solutionArray[j] = grabOnesPlace(tempProduct) + carryTheOne;
            carryTheOne = grabTensPlace(tempProduct);

            if (carryTheOne && (j == solutionArray.length - 1)) {
                solutionArray.push(carryTheOne);
            }
        }
    }

    return solutionArray.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
};
