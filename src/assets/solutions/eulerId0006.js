var solution = function () {
    var maximumNumber = 100;
    var sumThenSquare = 0;
    var squareThenSum = 0;
    var i;

    for (i = 1; i <= maximumNumber; i++) {
        sumThenSquare += i;
    }
    sumThenSquare *= sumThenSquare;

    for (i = 1; i <= maximumNumber; i++) {
        squareThenSum += (i * i);
    }

    return sumThenSquare - squareThenSum;
};