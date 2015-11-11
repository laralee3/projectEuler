// Copying from my solution for problem 7, this is again based on
// Sieve of Eratosthenes ( https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes ).
// Looking at pages like this ( http://primes.utm.edu/prove/prove1.html ) however,
// there are likely more efficient solutions. This will do until I figure out something
// more efficient.

var solution = function () {
    var primeDivisors = [2];
    var testNumber = 2; // Number to test for primeness
    var targetLimit = 2000000;
    var sum = 2;

    while (testNumber < targetLimit) {
        testNumber++;
        for (var i = 0; i < primeDivisors.length; i++) {
            if (testNumber % primeDivisors[i] == 0) {
                break; // Not a prime!
            } else if ((i == primeDivisors.length - 1) && testNumber % primeDivisors[i] != 0) {
                primeDivisors.push(testNumber); // It's a prime! Add to list.
                sum += testNumber;
            }
        }
    }
    return sum;
};