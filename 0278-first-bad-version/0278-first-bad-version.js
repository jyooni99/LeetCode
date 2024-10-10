/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */


var solution = function(isBadVersion) {

    return function(n) {
        let min = 0;
        let max = n;
        let mid;
        let isBad;

        while(min <= max){
            mid = Math.floor((min + max) / 2);
            isBad = isBadVersion(mid); 

            if(isBad === false){
                min = mid + 1;
            }else{
                max = mid - 1; 
            }
        }

        return min;
    };
};