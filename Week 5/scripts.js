// Joseph Mosich
// WebApp
// 9/22/2026

console.log("Creating Week HW #5 JavaScript Essentials intro to JS");

// Create at least 5 variables (a mix of strings, numbers, booleans).
let dogOne = "PorkChop";
let dogTwo = "Fiona";
let PorkChopAge = 5;
let FionaAge = 7;
let kibblePerMeal = 1.5;
let mealsPerDay = 2;
let isDog=true;

// Include at least 2 math operations.
let PorkChopKibblePerDay = kibblePerMeal * mealsPerDay;
let FionaKibblePerDay = kibblePerMeal * mealsPerDay;

// Include at least 2 string concatenations.
console.log(dogOne);
console.log(dogTwo);
console.log(dogOne, dogTwo, isDog);
console.log(dogOne + " eats " + PorkChopKibblePerDay + " cups of kibble per day.");
console.log(dogTwo + " eats " + FionaKibblePerDay + " cups of kibble per day.");
console.log(dogOne + " is " + PorkChopAge + " years old.");
console.log(dogTwo + " is " + FionaAge + " years old.");


// This function will run when the page loads and will display the results in the HTML element with the id "js_output".
window.onload = function() {
    document.getElementById("js_output").innerHTML += "<p>Result: Fiona eats " + FionaKibblePerDay + " cups of kibble per day.</p>";
    document.getElementById("js_output").innerHTML += "<p>Result: PorkChop eats " + PorkChopKibblePerDay + " cups of kibble per day.</p>";
};
