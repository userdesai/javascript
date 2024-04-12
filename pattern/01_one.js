console.log(`First pattern is`);
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
function printSquarePattern(size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printSquarePattern(5);

console.log(`Second pattern is`);
// * 
// * * 
// * * * 
// * * * * 
// * * * * *
function printRightTrianglePattern(size) {
    for (let i = 1; i <= size; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printRightTrianglePattern(5);


console.log(`Third pattern is`);
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 


function printInvertedRightTrianglePattern(size) {
    for (let i = size; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printInvertedRightTrianglePattern(5);


console.log(`pattern four`);

function printPyramidPattern(height) {
    // Loop through each row
    for (let i = 0; i < height; i++) {
        let row = '';

        // Add spaces before the asterisks
        for (let j = height - i; j > 1; j--) {
            row += ' ';
        }

        // Add asterisks
        for (let k = 0; k <= i; k++) {
            row += '* ';
        }

        // Print the row
        console.log(row);
    }
}

// Example: Print a pyramid with height 5
printPyramidPattern(5);






