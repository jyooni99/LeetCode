/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let joinNum = BigInt(digits.join('')) + BigInt(1);
    return joinNum.toString().split('').map(str => Number(str));
};