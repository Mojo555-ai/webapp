// jsoeph mosich
// webapp
// 10/14/26

// design thre functions
// function 1 greets user
function greetUser(name){
  console.log("Hello, " + name + "!");
}
let userName = prompt("What is your name?");
greetUser(userName); 

// function 2 adds numbers
function addNumbers(a,b){
  return(a+b);
}

let num1 = Number(prompt("Enter your first number you want to add: "));
let num2 = Number(prompt("Enter your second number you want to add: "));
let total = addNumbers(num1, num2);
console.log("The total is: " + total);

//   function 3 calculateArea()
function calculateArea(l,w){
  return l*w
}
let l = Number(prompt("Enter the Length: "));
let w = Number(prompt("Enter the Width: "));
let result = calculateArea(l,w);
console.log("The area is: " + result);

  