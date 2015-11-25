// We only need to check every first of the month. Setting Mon-Sun as 1-7 and given
// the starting parameters, every modulus 7 without remainder of the first of each month
// is a Sunday.

var solution = function () {
    var sundaysOnFirst = 0;
    var currentDay = 366; // 1st of January, 1900, Monday + 365 for 1900, non leap year
    var currentYear = 1901;
    var endYear = 2000;
    var i, isLeapYear;

    var daysPerMonth = [
        31, // January
        28, // February
        31, // March
        30, // April
        31, // May
        30, // June
        31, // July
        31, // August
        30, // September
        31, // October
        30, // November
        31 // December
    ];

    var leapYearCheck = function (year) {
        return (year % 4 == 0); // Adequate for given parameters of the problem
    };

    while (currentYear <= endYear) {
        isLeapYear = leapYearCheck(currentYear);

        for (i = 0; i < daysPerMonth.length; i++) { // Iterate through each month
            if ((i == 1) && isLeapYear) { // February && Leap Year true
                currentDay += (daysPerMonth[i] + 1);
            } else {
                currentDay += daysPerMonth[i];
            }

            if (currentDay % 7 == 0) { // Is it a sunday?
                sundaysOnFirst++;
            }
        }
        currentYear++;
    }
    return sundaysOnFirst;
};
