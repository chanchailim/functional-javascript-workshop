// function doubleAll(numbers) {
//     // SOLUTION GOES HERE
//     var result = [];
//     result = numbers.map(x => x * 2);

//     return result;
// }

// function getdoublevalue(number) {
//     return number * 2;
// }

// function doubleAll(numbers) {
//     // SOLUTION GOES HERE
//     var result = [];
//     result = numbers.map(getdoublevalue);

//     return result;
// }

function getmuliplevalue(res, num) {
    return res * num;
}

function doubleAll(numbers) {
    // SOLUTION GOES HERE
    var result = [];
    result = numbers.map(getmuliplevalue.bind(this, 2));

    return result;
}

doubleAll([1, 2, 3, 4]);
module.exports = doubleAll;