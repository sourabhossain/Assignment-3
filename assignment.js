// Feet to Miles Conversion Function
function feetToMile(feet) {
    if (feet < 0) {
        return "Distance can't be negative.";
    }

    var mile = feet * 0.000189394; // here 1 foot = 0.000189394 mile 
    return mile.toFixed(10).toString() + " Mile";
}


var result = feetToMile(100);
console.log(`Result: ${result}`);


// Wood Calculator Function
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "The number of furniture can't be negative.";
    }

    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood.toString() + " Wood";
}


var result = woodCalculator(6, 1, 2);
console.log(`Result: ${result}`);


// brickCalculator
function brickCalculator() {}

// tinyFriend
function tinyFriend() {}