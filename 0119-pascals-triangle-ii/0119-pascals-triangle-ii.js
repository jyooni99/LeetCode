/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
// start at the first row
    let row = [1]

    // build rows until we get to the row-index layer
    for (let i = 1; i <= rowIndex; i++) {
        // make a new row
        let newRow = [1]; // the first element is always 1

        // calculate the middle elements 
        for (let j = 1; j < row.length; j++) {
            newRow.push(row[j - 1] + row[j]);
        }

        // add a 1 to the end since the last element is always 1
        newRow.push(1);

        // move to the next row
        row = newRow;
    }

    return row;
};