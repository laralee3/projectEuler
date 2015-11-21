// Borrowing an idea from problem 10, we can eliminate any numbers we encounter in the chain
// from the list of starting numbers. While I can make this ever the slightly more efficient
// by making the array 0 to 999998, I chose to make this way more readable by having the
// array index match the starting number.
//
// I started from the limit and descended in hopes that it would eliminate more starter numbers
// and reduce runtime, but this appears to have negligible effect (at least to naked eye).

var solution = function () {
    var startingNumbers = [];
    var limit = 1000000;
    var longestChain = 0;
    var longestChainStarter = 0;
    var i, chainLength, chainNumber, evenResult, oddResult;

    // Generate array of starting numbers from 1 to limit - 1
    // ECMAScript 6 has Array.prototype.fill, which would do this for us
    for (i = 0; i < limit; i++) {
        startingNumbers[i] = true; // array position is the starting number
    }
    startingNumbers[0] = false;
    startingNumbers[1] = false;

    // n → n/2 (n is even)
    var evenSequence = function (n) {
        evenResult = n / 2;
        eliminateStartingNumber(evenResult);
        return evenResult;
    };

    // n → 3n + 1 (n is odd)
    var oddSequence = function (n) {
        oddResult = ((3 * n) + 1);
        eliminateStartingNumber(oddResult);
        return oddResult;
    };

    var eliminateStartingNumber = function (number) {
        if (number < limit) {
            startingNumbers[number] = false;
        }
    };

    for (i = limit - 1; i >= 2; i--) {
        chainNumber = i;
        chainLength = 1;

        while (chainNumber != 1 && startingNumbers[i]) {
            if (chainNumber % 2 == 0) {
                chainNumber = evenSequence(chainNumber);
            } else {
                chainNumber = oddSequence(chainNumber);
            }
            chainLength++;
        }

        if (chainLength > longestChain) {
            longestChain = chainLength;
            longestChainStarter = i;
        }
    }
    return longestChainStarter;
};