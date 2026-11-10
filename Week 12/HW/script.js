// console.log("testing");

const form = document.getElementById("albumForm");
const albuamList = document.getElementById("albumList");

document.getElementById("releaseyear").max = new Date().getFullYear();

// do not reload the page when the form is submitted
form.addEventListener("submit", function (event) {
  event.preventDefault();


// how to collect from all all the different fields
  const artist = document.getElementById("Artist").value;
  const album = document.getElementById("Album").value;
  const releaseyear = document.getElementById("releaseyear").value;
  const notes = document.getElementById("notes").value.trim();
  const owned = document.getElementById("owned").checked;

  const item = document.createElement("li");

  item.textContent =
    `Artist: ${artist} | Album: ${album} | ` +
    `Release Year: ${releaseyear} | Notes: ${notes || "None"} | ` +
    `Owned: ${owned ? "Yes" : "No"}`;

  albuamList.appendChild(item);

  form.reset();
  });

//   reminders
// case sensitivity matters
// keep names 
// pay attention where closing brakets should go )};
// results are just staying on the page at this PointerEvent, figure out how to get them to appear in the list below the form