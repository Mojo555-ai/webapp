// console.log("testing");

const form = document.getElementById("albumForm");
const albuamList = document.getElementById("albumList");

document.getElementById("releaseyear").max = new Date().getFullYear();

// do not reload the page when the form is submitted
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

// how to collect from all all the different fields
  const albumName = document.getElementById("Artist").value;
  const album = document.getElementById("Album").value;
  const releaseyear = document.getElementById("ReleaseYear").value;
  const notes = document.getElementById("Notes").value.trim();
  const owned = document.getElementById("Owned").checked;

  const item = document.createElement("li");

  item.textContent =
    `Artist: ${artist} | Album: ${album} | ` +
    `Release Year: ${releaseyear} | Notes: ${notes || "None"} | ` +
    `Owned: ${owned ? "Yes" : "No"}`;

  albuamList.appendChild(item);

  form.requestFullscreen();