// As in solutions to previous problems, using an array to handle big numbers.
// Borrows heavily from my solution for problem 16, as well as problem 13 for summing.
// Uses long multiplication.

// Needs heavy refactoring as of 2015.12.02; BUT IT WORKS

var solution = function () {
    var currentProduct = [0, 0, 1];
    var onesMultiplierProduct;
    var sumArray = [];
    var tensMultiplerProduct;
    var tempArray = [];
    var calcLimit, carryTheOne, firstLength, i, j, k, l, onesMultiplier,
        secondLength, sum, tempProduct, tensMultiplier;

    var grabTensPlace = function (num) {
        return Math.floor(num / 10);
    };

    var grabOnesPlace = function (num) {
        return num % 10;
    };

    var multiplyArray = function (multiplier) {
        carryTheOne = 0;
        tempArray = [];
        calcLimit = currentProduct.length;

        for (j = 0; j < calcLimit; j++) {
            tempProduct = currentProduct[j] * multiplier;
            sum = grabOnesPlace(tempProduct) + carryTheOne;

            if (sum > 9) {
                tempArray[j] = grabOnesPlace(sum);
                carryTheOne = grabTensPlace(tempProduct) + 1;
            } else {
                tempArray[j] = sum;
                carryTheOne = grabTensPlace(tempProduct);
            }
        }

        if (carryTheOne && (j == calcLimit)) {
            tempArray.push(carryTheOne);
        }
        return tempArray;
    };

    var sumArrays = function (array1, array2) {
        carryTheOne = 0;

        firstLength = array1.length;
        secondLength = array2.length;

        if (firstLength < secondLength) {
            for (l = firstLength; l < secondLength; l++) {
                array1[l] = 0;
            }
        } else if (secondLength < firstLength) {
            for (l = secondLength; l < firstLength; l++) {
                array2[l] = 0;
            }
        } else {
            // Nothing to do!
        }

        calcLimit = Math.max(firstLength, secondLength);
        for (k = 0; k < calcLimit; k++) {
            sum = array1[k] + array2[k] + carryTheOne;

            if (sum > 9) {
                carryTheOne = grabTensPlace(sum);
            } else {
                carryTheOne = 0;
            }
            sumArray[k] = grabOnesPlace(sum);
        }

        if (carryTheOne && (k == calcLimit)) {
            sumArray.push(carryTheOne);
        }
        return sumArray;
    };

    for (i = 99; i > 1; i--) {
        onesMultiplierProduct = [];
        tensMultiplerProduct = [];

        if (i >= 10) {
            tensMultiplier = grabTensPlace(i);
            onesMultiplier = grabOnesPlace(i);

            tensMultiplerProduct = multiplyArray(tensMultiplier);
            tensMultiplerProduct.unshift(0); // This could be done faster I think

            onesMultiplierProduct = multiplyArray(onesMultiplier);

            currentProduct = sumArrays(tensMultiplerProduct, onesMultiplierProduct);
        } else {
            currentProduct = multiplyArray(i);
        }
    }

    return currentProduct.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
};