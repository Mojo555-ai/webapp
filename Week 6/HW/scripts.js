// Joseph Mosich
// WebApp
// 9/26/2026




console.log("Creating Homework JavaScript Essentials Week 6: Themed Logic with User Input");

// Conditional Statement # 1 with User Input 
let sport = (prompt("What is your favorite sport?\n1. Football\n2. Basketball\n3. Baseball\n4. Soccer\n5. Hockey"));

// === is a strict equlity operator which means it checks for both value and type, it will needs both to be the same in order to return true.
// console.log lets it return values to the console, so you find your results in the tools of the console browser.
if (sport === "1" || sport.toLowerCase() === "football") {
    console.log("You chose Football!");
}else if (sport === "2" || sport.toLowerCase() === "basketball") {
    console.log("You chose Basketball!");
}else if (sport === "3" || sport.toLowerCase() === "baseball") {
    console.log("You chose Baseball!");
}else if (sport === "4" || sport.toLowerCase() === "soccer") {
    console.log("You chose Soccer!");
}else if (sport === "5" || sport.toLowerCase() === "hockey") {
    console.log("You chose Hockey!");
}

// Conditional Statement # 2 with User Input
let team = (prompt("What is your favorite team?"));

// !== is a strict non equal operator allowing user to enter a team name of their choice, they need to enter a team name to get a response, but really any type of response will work and it doesnt have to be a team name. spo you can consider this a free response question.
if (team !== "")
 { console.log("Your favorite team is " + team + "!");}



// Conditional Statement # 3 with User Input

let championships = Number(prompt("How many championships has your team won?"));

// outter if statement to check if the number of championships is greater than or equal to 0
if (championships >= 0) {
// nested if else statement to check the number of championships won by the team. this took me a while because it has been a little since I have used nested statements. 
    if (championships > 5) {
        console.log("Your team has won " + championships + " your team is amazing!");
    }
    else if (championships <= 5 && championships > 3) {
        console.log("Your team has won " + championships + " maybe your team will be as good as the Lakers one day, but probably not!");
    }
    else if(championships >= 0 && championships <= 3) {
        console.log("Your team has won " + championships + " you need to find a better team!");
    }
}
// if they type something else other than a number, it will tell them to enter a valid number of championships
else {
        console.log("please enter a valid number of championships!");
    }
