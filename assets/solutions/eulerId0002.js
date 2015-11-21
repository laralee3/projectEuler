var solution = function () {
    var limit = 4000000;
    var firstNumber = 1;
    var secondNumber = 2;
    var buffer = 0;
    var total = 2;
    var keepLooping = true;

    var checkEven = function (value) {
        return (value % 2) == 0;
    };

    var addToTotalIfEven = function (value) {
        if (checkEven(value)) {
            total += value;
        }
    };

    var tallyAndCheckLimit = function (value) {
        addToTotalIfEven(value);
        if (value >= limit) {
            keepLooping = false;
        }
    };

    while (keepLooping) {
        buffer = firstNumber + secondNumber;

        tallyAndCheckLimit(buffer);

        firstNumber = secondNumber;
        secondNumber = buffer;
    }
    return total;
};