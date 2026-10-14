// what is a function
// reusable block of code designed to perform a specific class

// function greatUser() {
//   console.log("Hello There.");
// }

// // calls executes function
// greatUser(); 

// function structure
// keyword, function: tells 35 were defigning a function
// name, identity of a function
// parameters variable inside the parantheses that receive data
// body is the code btween the curly brakets


// parameters and arguments
// parameters are when defining a function
// arguments is the value when calling it


// function great(name){
//   console.log("Hello"+ name);
// }

// // Joseph is the argument
// great("Joseph");

// function that will add 2 numbers together then console log the total
function addNumbers(a,b){
  return(a+b)
}

let total=addNumbers (4,6);
  console.log("The total is: " + total);

// // return sends a value back to where the function was called
// // console.log() just prints it
// // return is like yuor function handing you back a note with the answer written on it
// // console.log is your function yelling the answer out loud we hear it but we cant use it

function multiply(x,y) {
  return x*y
}

let result=multiply(15,15);
  console.log(result);

// create a function that will count up to 5 by 1s

function countToN(n) {
  for (let i=1; i<=n; i++){
    console.log(i);
  }
}
countToN(5);

// nested function is a function that call another function inside of it

function square(num){
  return num*num;
}

function printSquare(num){
  console.log("Square is: "+ square(num));
}

printSquare(6);

// function that greets the user asks for theur name and then prints it
function userName(){
  let name=prompt("Whatis your name? ");
  console.log("Welcome, "+ name);
}

userName();