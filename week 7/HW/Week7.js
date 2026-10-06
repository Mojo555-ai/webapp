// Jsoeph Mosich
// Web App Week 7 Homework
// 10/6/26

console.log("Web App Week 7 Homework");

// PART 1: Prompt
let num = (prompt("Enter a number from 1 to 3: "));

if (num == 1) {
    console.log("You chose 1!");
} else if (num == 2) {
    console.log("You chose 2!");
} else if (num == 3) {
    console.log("You chose 3!");
} else {
    console.log("Please choose a number from 1 to 3.");
}

// PART 2 prompt and loop
// This loop and prompt checks the number that coincides with lowercase fruit names. If the user inputs a number, it will also check that number against the fruit list.
let fruit = (prompt("What is your favorite fruit?\n1. Apple\n2. Orange\n3. Banana\n4. Grape\n5. Strawberry\n6. Watermelon\n7. Pineapple\n8. Mango\n9. Peach\n10. Cherry"));
let fruitLower = fruit.toLowerCase();

if (fruit == 1 || fruitLower === "apple") {
    console.log("You chose Apple!");
}
else if (fruit == 2 || fruitLower === "Orange!") {
    console.log("You chose Orange!");
}
else if (fruit == 3 || fruitLower === "banana") {
    console.log("You chose Banana!");
}
else if (fruit == 4 || fruitLower === "grape") {
    console.log("You chose Grape!");
}
else if (fruit == 5 || fruitLower === "strawberry") {
    console.log("You chose Strawberry!");
}
else if (fruit == 6 || fruitLower === "watermelon") {
    console.log("You chose Watermelon!");
}
else if (fruit == 7 || fruitLower === "pineapple") {
    console.log("You chose Pineapple!");
}
else if (fruit == 8 || fruitLower === "mango") {
    console.log("You chose Mango!");
}
else if (fruit == 9 || fruitLower === "peach") {
    console.log("You chose Peach!");
}
else if (fruit == 10 || fruitLower === "cherry") {
    console.log("You chose Cherry!");
}
else {
    console.log("Invalid choice.");
}

// PART 2: Use multiple loops
// This loop counts from 1 to 100 and prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5. got a lot of the help from tutorials.
console.log("FizzBuzz Loop:");

for (let i = 1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// countts starting at 1 and goes up to the number the user inputs in console. 
let count=Number(prompt("Pick a number: "));

for(let i=1; i<=count ; i++){
    console.log("i is: "+i);
}

// Part 3: This loop checks if each number is even or odd in the console.
for (let i = 1; i <= count; i++) {
    if (i % 2 === 0) {
        console.log(i + " it's an even number");
    } else if (i % 2 !== 0) {
        console.log(i + " it's an odd number");
    } else {
        console.log(i + " ENTER A NUMBER");
    }    
}
