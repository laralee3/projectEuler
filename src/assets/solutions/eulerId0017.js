// The ones place calculation returns 0 for every 10 places, which
// is pushed into the sumArray as undefined. When the join() is
// performed, undefined will go away. This can probably be done better.

var solution = function () {
    var numberWords = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
        1000: 'thousand'
    };


    var grabHundredsPlace = function (num) {
        return Math.floor(num / 100);
    };

    var grabTensPlace = function (num) {
        return Math.floor(num / 10);
    };

    var grabOnesPlace = function (num) {
        return (num % 10);
    };

    var reduceHundreds = function (num) {
        // Run this to check if num is 3 digits
        if (num.toString().length == 3) {
            return num % 100; // strip hundreds place
        } else {
            return num;
        }
    };

    var addTwentyUpToNinetyNineToArray = function (num) {
        sumArray.push(numberWords[grabTensPlace(reduceHundreds(num)) * 10]);
        sumArray.push(numberWords[grabOnesPlace(reduceHundreds(num))]);
    };

    var addHundredsToArray = function (num) {
        sumArray.push(numberWords[grabHundredsPlace(num)]);
        sumArray.push(numberWords[100]);
    };

    var limit = 1000;
    var sumArray = [];
    var i, sumString;

    // Adds words for 1-999
    for (i = 1; i < limit; i++) {
        if (i <= 20) { // 1-20
            sumArray.push(numberWords[i]);
        } else if (i >= 21 && i <= 99) { // 21-99
            addTwentyUpToNinetyNineToArray(i);
        } else { // 100-999
            if (i % 100 == 0) { // x00s
                addHundredsToArray(i);
            } else if (i % 100 <= 20) { // x01-x20
                addHundredsToArray(i);
                sumArray.push('and');
                sumArray.push(numberWords[i % 100]);
            } else { // x21-x99
                addHundredsToArray(i);
                sumArray.push('and');
                addTwentyUpToNinetyNineToArray(i);
            }
        }
    }
    sumArray.push(numberWords[1], numberWords[1000]); // Adds words for 1000
    sumString = sumArray.join(''); // Joins array to allow character count

    return sumString.length;
};
