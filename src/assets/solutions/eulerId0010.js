// Copying from my solution for problem 7, this is again based on
// Sieve of Eratosthenes ( https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes ).
//
// Updated. Original implementation is in github history. This solution is MUCH faster than
// the original and follows the full implementation of Eratosthenes Sieve.

var solution = function () {
    var isPrime = [false, false]; // Index is potential prime, 0 and 1 are not primes
    var limit = 2000000;
    var testLimit = Math.sqrt(limit); // Per Sieve of Eratosthenes, no need to test further
    var sum = 0;
    var i, j;

    for (i = 2; i <= limit; i++) {
        isPrime[i] = true; // Assume all numbers are primes at first
    }

    var eratosthenesSieve = function (multiplier) {
        for (j = multiplier * multiplier; j <= limit; j = j + multiplier) { // Disregard first number
            isPrime[j] = false;
        }
    };

    // Now eliminate non primes
    for (i = 2; i < testLimit; i++) {
        eratosthenesSieve(i);
    }

    // Now sum
    for (i = 2; i < isPrime.length; i++) {
        if (isPrime[i] == true) {
            sum += i;
        }
    }

    return sum;
};




