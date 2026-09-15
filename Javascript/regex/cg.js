/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = 2;

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
const lastCol = n * 2 + 3;
const lastRow = n * 2 + 3;

for (let i = 0; i < lastCol; i++) {
    for(let j = 0; j < lastRow; j++) {
        if (i === 0 || j === 0) {
            console.log('#')
        } else if(i === lastCol || j === lastRow) {
            console.log('#\n')
        }
    }
}