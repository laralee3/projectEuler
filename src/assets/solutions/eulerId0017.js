// Not the most optimal generic solution. Taking integer length
// using integer.toString().length could reduce lines of code for
// just a bit more logic.
//
// The ones place calculation returns 0 for every 10 places, which
// is pushed into the sumArray as undefined. When the join() is
// performed, undefined will go away. This can probably be done better.
//
// I will also optimize the logic to determine how the words are added.
// Certainly the logic for xx1-x20 can be split out.

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

    var grabHundredsPlace = function (product) {
        return Math.floor(product / 100);
    };

    var grabTensPlace = function (product) {
        return Math.floor(product / 10);
    };

    var grabOnesPlace = function (product, divisor) {
        return (product % divisor);
    };

    var limit = 1000;
    var sumArray = [];
    var i, sumString;

    for (i = 1; i < limit; i++) {
        if (i <= 20) {
            sumArray.push(numberWords[i]);
        } else if (i >= 21 && i <= 99) {
            sumArray.push(numberWords[grabTensPlace(i) * 10]);
            sumArray.push(numberWords[grabOnesPlace(i, 10)]);
        } else {
            if (i % 100 == 0) {
                sumArray.push(numberWords[grabHundredsPlace(i)]);
                sumArray.push(numberWords[100]);
            } else if (i % 100 <= 20) {
                sumArray.push(numberWords[grabHundredsPlace(i)]);
                sumArray.push(numberWords[100]);
                sumArray.push('and');
                sumArray.push(numberWords[i % 100]);
            } else {
                sumArray.push(numberWords[grabHundredsPlace(i)]);
                sumArray.push(numberWords[100]);
                sumArray.push('and');
                sumArray.push(numberWords[grabTensPlace(i % 100) * 10]);
                sumArray.push(numberWords[grabOnesPlace(i % 100, 10)]);
            }
        }
    }
    sumArray.push(numberWords[1]);
    sumArray.push(numberWords[1000]);
    sumString = sumArray.join('');

    return sumString.length;
};
