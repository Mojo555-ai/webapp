// console.log("testing");

// 1. Find the button by its ID
const themeButton = document.getElementById("themeButton");

// 2. Listen for a click event on that button
themeButton.addEventListener("click", () => {

  // 3. Add/remove the "dark" class on the body
  document.body.classList.toggle("dark");
  console.log("Theme changed!");
});

// CHANGED FROM ITEMS TO TASKS
const addBtn = document.getElementById("addTask");
const list = document.getElementById("Tasks");
let counter = 1; // keeps track of item numbers

addBtn.addEventListener("click", () => {
  // Create a new list item
  const newItem = document.createElement("li");

  // Give it text (Item 1, Item 2, ...)
  newItem.textContent = "Task " + counter;

  // Add it to the list on the page
  list.appendChild(newItem);

  counter++; // increase number for next item
});

//  Remove Items (Delegation Trick)
// Now make it so clicking any item deletes that item.
// Add this below your last block:

list.addEventListener("click", (event) => {
  // Check if you clicked directly on a list item
  if (event.target.tagName === "LI") {
    event.target.remove(); // delete that <li>
  }
});

// •	Add a console message when you remove an item (use console.log).
// this was a lot like the step given above. I had to pay attention to LI to get it to finction properly
list.addEventListener("click", (event) => {
  if(event.target.tagName === "LI") {
    event.target.remove();
    console.log("A task was removed!")
  }
});

// Keyboard Input Event
// Now you’ll make the text update whenever you press a key.
// this was freaking hard AND I had to look up the answer. I was trying to use keydown and it was not working. I also had to add a <p> tag in the html with an id of keyOutput. I STILL DONT KNOW IF IT IS WORKING LIKE YOU WANT IT TO, BUT IT IS FUNCTIONING THE WAY THAT I HAVE IT
const keyOutput = document.getElementById("keyOutput");

document.addEventListener("keyup", (event) => {
  keyOutput.textContent = "You pressed: " + event.key;
});

