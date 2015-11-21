// Based on Sieve of Eratosthenes

var solution = function () {
    var primeDivisors = [2];
    var counter = 1; // # of primes found
    var testNumber = 2; // Number to test for primeness
    var targetLimit = 10001; // The # prime you want to find

    while (counter != targetLimit) {
        testNumber++;
        for (var i = 0; i < primeDivisors.length; i++) {
            if (testNumber % primeDivisors[i] == 0) {
                break; // Not a prime!
            } else if ((i == primeDivisors.length - 1) && testNumber % primeDivisors[i] != 0) {
                primeDivisors.push(testNumber); // It's a prime! Add to list of divisors.
                counter++;
            }
        }
    }
    return testNumber;
};