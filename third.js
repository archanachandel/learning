digits = ['1','2',"3"];
let n = digits.length;

console.log("Count is ", countWays(digits, n));

function countWays(digits, n) {
    if (n == 0 || (n == 1 && digits[0] == '0')) {
        return 0;
    }
    return countDecoding(digits, n);
}

function countDecoding(digits, n) {
    // base cases
   
    if (n == 0 || n == 1) {
        return 1;
    }
    // for base condition "01123" should return 0
    if (digits[0] == '0') {
        return 0;
    }

    // Initialize count
    let count = 0;

    // If the last digit is not 0, then
    // last digit must add to
    // the number of words
    if (digits[n - 1] > '0') {
        count = countDecoding(digits, n - 1);
    }
    // If the last two digits form a number
    // smaller than or equal to 26,
    // then consider last two digits and recur
    if (digits[n - 2] == '1' ||
        (digits[n - 2] == '2' &&
            digits[n - 1] < '7')) {
        count += countDecoding(digits, n - 2);
    }
    return count;
}
