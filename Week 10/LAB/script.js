const title = document.getElementById("title");
title.textContent = "Hello from JavaScript!";

// B) Change Styles with JavaScript
title.style.color = "blue";
title.style.fontFamily = "Arial, sans-serif";

// C) Select Using a CSS Selector
const mainSection = document.querySelector(".main");
mainSection.style.backgroundColor = "#f0f0f0";

// D) Select Multiple Elements with querySelectorAll()
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p, i) => {
  p.textContent = `Paragraph ${i + 1} updated by JS`;
  p.style.color = "green";
});

// E) Add Interactivity with a Button
const toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("highlight");
});

// F) Create and Append New Elements
const resources = [
  { text: "CSI", href: "https://www.csi.edu" },
  { text: "MDN Web Docs", href: "https://developer.mozilla.org" },
  { text: "Eloquent JavaScript", href: "https://eloquentjavascript.net" }
];

const list = document.getElementById("links");
list.innerHTML = "";

for (const item of resources) {
  const li = document.createElement("li"); 
  const a = document.createElement("a"); 
  a.textContent = item.text; 
  a.href = item.href; 
  a.target = "_blank"; 
  li.appendChild(a); 
  list.appendChild(li); 
}