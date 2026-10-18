// Joseph Mosich
// WebApp 
// 10/18/26


// console.log ("test")

// One function that takes no parameters.
function greetUser() {
    let userName = prompt("What is your name?");
    console.log("Hello, " + userName + "! Welcome to this fabulously built  website.");
}

// One that accepts parameters and returns a value.
function calculateArea(l, w) {
    return l * w;
}

// One that calls another function inside it (nested function call).

function addNumbers(a, b) {
    return a + b;
}

function NumberAdder() {
    let num1 = Number(prompt("Enter the first number:"));
    let num2 = Number(prompt("Enter the second number:"));

    let sum = addNumbers(num1, num2);
    console.log("The total is: " +sum);

    console.log("Thank you, until next time!");
}
    
greetUser();
NumberAdder();

