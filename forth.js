let arr = [2,1,3];
let n = arr.length;

function findMaxSum(arr, n) {
    //  CHECK IF LENGHT IS O THEN RETURN 0
    if (n == 0)
        return 0;
    let temp = arr[0];

    //  CHECK IF LENGHT IS 1 THEN RETURN  THAT VALUE
    if (n == 1)
        return temp;


    let max_val = temp;
    let value = 0;

    for (let i = 1; i < n; i++) {
        let first = temp;
        let second = arr[i];
        if (i > 1) {
            second += value;
        }
        let curr = Math.max(first, second);
        value = temp;
        temp = curr;
    }
    let max_final = temp;
    return Math.max(max_val, max_final);
}
console.log(findMaxSum(arr, n));