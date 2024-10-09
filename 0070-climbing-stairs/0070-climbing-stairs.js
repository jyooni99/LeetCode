/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n < 2) return 1;
    else{return climbStairs(n - 2) + climbStairs(n - 1)}
};