/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    nums.unshift(init);
    let acc = init;

    for(let i = 0; i < nums.length - 1; i++){
        acc = fn(acc, nums[i + 1]);
    }
    return acc;
};