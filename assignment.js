// Feet To Miles Conversion Function
function feetToMile(feet) {
    if (feet < 0) {
        return "Distance can't be negative.";
    }

    let mile = feet * 0.000189394; // here 1 foot = 0.000189394 mile 

    return mile.toFixed(6).toString() + " Mile";
}


console.log(`Result: ${feetToMile(100)}`);


// Wood Calculator Function
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "The Negative value can't be measurable.";
    }

    let woodForChair = chair * 1;
    let woodForTable = table * 3;
    let woodForBed = bed * 5;
    let totalWood = woodForChair + woodForTable + woodForBed;

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
    if (buildingSize < 0) {
        return "Height can't be negative.";
    }
    
    const brick = 1000;
    let totalBricks = 0;

    if (buildingSize <= 10) {
        totalBricks = buildingSize * 15 * brick;
    } else if (buildingSize <= 20) {
        totalBricks = (10 * 15 * brick) + ((buildingSize - 10) * 12 * brick);
    } else {
        totalBricks = (10 * 15 * brick) + (10 * 12 * brick) + ((buildingSize - 20) * 10 * brick);
    }

    return totalBricks + " Bricks";
}


console.log(`Result: ${brickCalculator(21)}`);


// Find tiny Friend Name From Friend Circle Function 
function tinyFriend(friends) {
    if (friends.length == 0) {
        return "Friend list is empty.";
    }

    let tinyName = friends[0];

    for (let item = 0; item < friends.length; item++) {
        let element = friends[item];

        if (element.length <= tinyName.length) {
            tinyName = element;

            if (tinyName.length == 0) {
                return "Provide a name, please.";
            }
        }
    }

    return tinyName;
}


let friends = ["Sourab", "Pamel", "Ebrahim", "Shreerupa", "Avishek"];
console.log(`Result: ${tinyFriend(friends)}`);
