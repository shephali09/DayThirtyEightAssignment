let randonNumberOne = Math.floor(Math.random() * 900) + 100;
let randonNumberTwo = Math.floor(Math.random() * 900) + 100;
let randonNumberThree = Math.floor(Math.random() * 900) + 100;
let randonNumberFour = Math.floor(Math.random() * 900) + 100;
let randonNumberFive = Math.floor(Math.random() * 900) + 100;

console.log("Random numbers are :" + randonNumberOne + "," + randonNumberTwo + "," + randonNumberThree + "," + randonNumberFour + "," + randonNumberFive);

if ((randonNumberOne > randonNumberTwo) && (randonNumberOne > randonNumberThree) && (randonNumberOne > randonNumberFour) && (randonNumberOne > randonNumberFive)) {
    console.log(randonNumberOne + " is maximum number");
} else if ((randonNumberTwo > randonNumberOne) && (randonNumberTwo > randonNumberThree) && (randonNumberTwo > randonNumberFour) && (randonNumberTwo > randonNumberFive)) {
    console.log(randonNumberTwo + " is maximum number");
} else if ((randonNumberThree > randonNumberOne) && (randonNumberThree > randonNumberTwo) && (randonNumberThree > randonNumberFour) && (randonNumberThree > randonNumberFive)) {
    console.log(randonNumberThree + " is maximum number");
} else if ((randonNumberFour > randonNumberOne) && (randonNumberFour > randonNumberTwo) && (randonNumberFour > randonNumberThree) && (randonNumberFour > randonNumberFive)) {
    console.log(randonNumberFour + " is maximum number");
} else if ((randonNumberFive > randonNumberOne) && (randonNumberFive > randonNumberTwo) && (randonNumberFive > randonNumberThree) && (randonNumberFive > randonNumberFour)) {
    console.log(randonNumberFive + " is maximum number")
}

if ((randonNumberOne < randonNumberTwo) && (randonNumberOne < randonNumberThree) && (randonNumberOne < randonNumberFour) && (randonNumberOne < randonNumberFive)) {
    console.log(randonNumberOne + " is minimum number");
} else if ((randonNumberTwo < randonNumberOne) && (randonNumberTwo < randonNumberThree) && (randonNumberTwo < randonNumberFour) && (randonNumberTwo < randonNumberFive)) {
    console.log(randonNumberTwo + " is minimum number");
} else if ((randonNumberThree < randonNumberOne) && (randonNumberThree < randonNumberTwo) && (randonNumberThree < randonNumberFour) && (randonNumberThree < randonNumberFive)) {
    console.log(randonNumberThree + " is minimum number");
} else if ((randonNumberFour < randonNumberOne) && (randonNumberFour < randonNumberTwo) && (randonNumberFour < randonNumberThree) && (randonNumberFour < randonNumberFive)) {
    console.log(randonNumberFour + " is minimum number");
} else if ((randonNumberFive < randonNumberOne) && (randonNumberFive < randonNumberTwo) && (randonNumberFive < randonNumberThree) && (randonNumberFive < randonNumberFour)) {
    console.log(randonNumberFive + " is minimum number")
}