// Going for bottom up solution that calculates highest sum between
// lower 2 numbers and the number above the pair one row up, then
// replacing the row up with the highest sums.
//
// As noted in the project Euler page, this puzzle will be repeated
// in problem 67. With some additional code to parse the provided
// triangle into an array, this solution should still work (hopefully).

var solution = function () {
    var currentRow, i, popped;

    var triangle = [
        [75],
        [95, 64],
        [17, 47, 82],
        [18, 35, 87, 10],
        [20, 04, 82, 47, 65],
        [19, 01, 23, 75, 03, 34],
        [88, 02, 77, 73, 07, 63, 67],
        [99, 65, 04, 28, 06, 16, 70, 92],
        [41, 41, 26, 56, 83, 40, 80, 70, 33],
        [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
        [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
        [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
        [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
        [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
        [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]
    ];

    var highestOfLocalTriangle = function (bottom, top) {
        return Math.max(bottom[0] + top, bottom[1] + top);
    };

    while (triangle.length > 1) {
        popped = triangle.pop();

        currentRow = triangle.length - 1;

        for (i = 0; i < triangle[currentRow].length; i++) {
            triangle[currentRow][i] = highestOfLocalTriangle(
                popped.slice(i, i + 2), triangle[currentRow][i]
            );
        }
    }

    return triangle[0][0];
};
