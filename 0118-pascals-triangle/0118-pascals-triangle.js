/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const arr = Array.from({ length: numRows }, () => []);
    let sum = 1;

    for(let i = 0; i < numRows; i++){
        for(let j = 0; j <= i; j++){
            if(j === 0 || j === i){
                arr[i][j] = 1;
            }else{
                arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
            }
        }
    }

    return arr;
};