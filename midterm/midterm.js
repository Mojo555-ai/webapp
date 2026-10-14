

console.log("Hello, World! This is the midterm.js file.");


console.log("creating framework for midterm js file");

let TestOne = "database";
let TestTwo = "web development";
let perfectScore = 100;
let passingScore = 70;
let failingScore = 60;
let testScore = 90; 

window.onload = function() {
    let testChoice = prompt("Are you taking test one or test two? (Type 'one' or 'two'):");
    
    let currentSubject = "";
    if (testChoice.toLowerCase() === "one") {
        currentSubject = TestOne;
    } else if (testChoice.toLowerCase() === "two") {
        currentSubject = TestTwo;
    } else {
        currentSubject = "Unknown subject";
    }

    let currentGrade = Number(prompt("What is your current grade?: "));
    let userScore = Number(prompt("What is your test score?: "));
    let isPassing = userScore >= passingScore;
    let pointsMissed = perfectScore - userScore;
    let totalPoints = currentGrade + userScore;
    let gradeDecimal = totalPoints / 200;

    let letterGrade = "";
    if (gradeDecimal >= 0.90) {
        letterGrade = "A";
    } else if (gradeDecimal >= 0.80) {
        letterGrade = "B";
    } else if (gradeDecimal >= 0.70) {
        letterGrade = "C";
    } else if (gradeDecimal >= 0.60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    console.log("Taking Test For: " + currentSubject);
    console.log("Current Grade Input: " + currentGrade);
    console.log("User Score Input: " + userScore);
    console.log("Passed?: " + isPassing);
    console.log("Points missed from perfect score: " + pointsMissed);
    console.log("Combined total points: " + totalPoints);
    console.log("Grade Calculation (Total / 200): " + gradeDecimal);
    console.log("Final Letter Grade: " + letterGrade);

if (isPassing) {
        if (letterGrade === "A") {
            for (let i = 1; i <= 3; i++) {
                console.log("Honor Roll Star #" + i);
            }
        }
};
};

let triangle="";

for (let line=1;line<=7;line++){
    triangle+="*";
    console.log(triangle) 
}

let num=Number(prompt("Pick a number: "));
for(let i=1; i<=num; i++){
    console.log("i is: "+i);
}