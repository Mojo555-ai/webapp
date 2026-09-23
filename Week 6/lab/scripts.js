
// Joseph Mosich
// webapp
// 9/23/2026

// PART 2
// Ask the user for a score using prompt().
// Convert it to a number with Number().

let score = Number(prompt("Enter your score (0-100:"))

// Use if / else if / else to print the letter grade (A, B, C, F) to the console.

if (score >= 89) {
    console.log("Grade is A");
}else if (score >= 79) {
    console.log("Grade is B");
}else if (score >= 69) {
    console.log("Grade is C");
}else {
    console.log("Grade is F");
}

// PART 3
// Ask for the user’s age with prompt().

let age = Number(prompt("Enter your age: "))
// Print "Adult" if age ≥ 18, otherwise "Minor".

if (age >= 18) {
    console.log("You are an Adult ")
}else {
    console.log("You are a Minor" )
}

// PART 4
// Add one more prompt() + conditional of your choice

let weather = Number(prompt("What is the temperature: "))

if (weather >= 75) {
    console.log("It is hot");
}else if (weather >= 60) {
    console.log("It is perfect ");
}else {
    console.log("get a jacket")
}
