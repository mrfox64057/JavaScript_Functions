
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0) {
      console.log("FAILURE!");
      return;
    }
  
    for (let i = 1; i <= count; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
}
console.log("");
printOdds(10);
console.log("");
printOdds(5);
console.log("");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    if (!userName || !age) {
      console.log("Something has gone horribly ary, make sure you have entered a name and age");
      return;
    }
  
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  
    if (age < 16) {
      console.log(belowSixteen);
    } else {
      console.log(aboveSixteen);
    }
}
console.log("");
checkAge("Mike", 156);
console.log("");
checkAge("Amorris", 15);
console.log("");
  
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function determineQuadrant(x, y) {
    if (x === 0 && y === 0) {
      console.log("The point is at the origin.");
    } else if (x === 0) {
      console.log(`The point (${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
      console.log(`The point (${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
      console.log(`The point (${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
      console.log(`The point (${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
      console.log(`The point (${x}, ${y}) is in Quadrant 3.`);
    } else if (x > 0 && y < 0) {
      console.log(`The point (${x}, ${y}) is in Quadrant 4.`);
    }
 }
 console.log("");
 determineQuadrant(0, 2);
 console.log("");
 determineQuadrant(-6, 18);
 console.log("");
  
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function determineTriangleType(side1, side2, side3) {
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      console.log("Invalid triangle: the sum of two sides is not greater than the length of the third side.");
    } else if (side1 === side2 && side2 === side3) {
      console.log("This looks to be an equilateral triangle since all the sides are equal.");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      console.log("This would appear to be an isosceles triangle as two of the side lengths are equal.");
    } else {
      console.log("This is what we call a scalene triangle or a triangle with all the side lengths differing from one another.");
    }
}
console.log("");
determineTriangleType(1, 2, 2);
console.log("");
determineTriangleType(1, 1, 2);
console.log("");
determineTriangleType(1, 2, 1);
console.log("");
determineTriangleType(2, 1, 1);
console.log("");
determineTriangleType(3, 3, 3);
console.log("");
determineTriangleType(3, 4, 5);
console.log("");

// Exercise 5 Section
function dataPlanStatus(planLimit, day, usage) {
  const daysRemaining = 30 - day;
  const averageDailyUsage = usage / day;
  const remainingData = planLimit - usage;
  const averageDailyRemaining = remainingData / daysRemaining;

  if (usage > planLimit) {
    console.log("You have exceeded your data limit.");
  } else if (usage === planLimit) {
    console.log("You have used up all your data for this month.");
  } else {
    console.log("Data Usage Status:");
    console.log(`- Average daily usage: ${parseFloat(averageDailyUsage.toFixed(2))} GB`);
    console.log(`- Remaining data: ${parseFloat(remainingData.toFixed(2))} GB`);
    console.log(`- Average daily remaining: ${parseFloat(averageDailyRemaining.toFixed(2))} GB`);
  }  
}
console.log("");
dataPlanStatus(100, 15, 56);
console.log("");
dataPlanStatus(200, 20, 150);
console.log("");
dataPlanStatus(50, 10, 30);
console.log("");