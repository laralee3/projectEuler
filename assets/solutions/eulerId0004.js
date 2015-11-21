var solution = function () {
    var largestPalindrome = 0;
    var product = 0;

    var reverseNumber = function (number) {
        number = number + ''; // Making the number a string so we can use the array reverse() on it
        return number.split('').reverse().join('');
    };

    for (var i = 100; i < 1000; i++) {
        for (var j = i; j < 1000; j++) {
            product = i * j;

            if (product == reverseNumber(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }

        }
    }
    return largestPalindrome;
};