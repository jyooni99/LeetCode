/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = [0, 1, 2];

    function fibo(n, memo){
        if(memo[n] !== undefined) return memo[n];
        memo[n] = fibo(n - 2, memo) + fibo(n - 1, memo);

        return memo[n];
    }

    return fibo(n, memo);
};