// Feet To Miles Conversion Function
function feetToMile(feet) {
    if (feet < 0) {
        return "Distance can't be negative.";
    }

    var mile = feet * 0.000189394; // here 1 foot = 0.000189394 mile 

    return mile.toFixed(10).toString() + " Mile";
}


console.log(`Result: ${feetToMile(100)}`);


// Wood Calculator Function
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "The number of furniture can't be negative.";
    }

    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var totalWood = woodForChair + woodForTable + woodForBed;

    if (totalWood > 1) {
        totalWood = totalWood.toString() + " Woods";
    } else {
        totalWood = totalWood.toString() + " Wood"
    }

    return totalWood;
}


console.log(`Result: ${woodCalculator(6, 1, 2)}`);


// Brick Calculation Function 
function brickCalculator(buildingSize) {
    if (buildingSize <= 0) {
        return "Building size can't be negative or zero.";
    }

    var oneToTen = 15;
    var elevenToTwenty = 12;
    var twentyOneToAll = 10;
    var totalBricks;

    if (buildingSize <= 10) {
        totalBricks = buildingSize * 1000;
    } else if (buildingSize <= 20) {
        oneToTen *= 10;
        elevenToTwenty = buildingSize - 10;
        buildingSize = oneToTen + (elevenToTwenty * 12);
        totalBricks = buildingSize * 1000;
    } else {
        oneToTen *= 10;
        elevenToTwenty *= 10;
        twentyOneToAll = buildingSize - 20;
        buildingSize = oneToTen + elevenToTwenty + (twentyOneToAll * 10);
        totalBricks = buildingSize * 1000;
    }

    return totalBricks + " Bricks";
}


console.log(`Result: ${brickCalculator(100)}`);


// Find Smallest Friend Name From Friend Circle Function 
function tinyFriend(friend) {
    if (friend.length == 0) {
        return "Friend list is empty.";
    }

    var smallestName = friend[0];

    for (var item = 0; item < friend.length; item++) {
        var element = friend[item];

        if (element.length < smallestName.length) {
            smallestName = element;
        }
    }

    return smallestName;
}


var friends = ["Sourab", "Pamel", "Ebrahim", "Shreerupa", "Avishek"];
console.log(`Result: ${tinyFriend(friends)}`);