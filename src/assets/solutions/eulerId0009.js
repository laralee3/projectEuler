var solution = function () {
    var solutionFound = false;
    var a = 0;
    var b, c;

    while (!solutionFound) {
        a++;
        for (b = a + 1, c = 1000 - (a + b); b <= c; b++, c--) {
            if ((c * c) == (a * a) + (b * b)) {
                solutionFound = true;
                break;
            }
        }
    }
    return a * b * c;
};