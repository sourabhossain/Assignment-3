// Feet to Miles Conversion Program
function feetToMile(feet) {
    if (feet < 0) {
        console.log("Distance can't be negative.")
    } else {
        var mile = feet * 0.000189394;
    }

    return mile;
}

var result = feetToMile(100);
console.log(result.toFixed(10));

// woodCalculator
function woodCalculator() {}

// brickCalculator
function brickCalculator() {}

// tinyFriend
function tinyFriend() {}