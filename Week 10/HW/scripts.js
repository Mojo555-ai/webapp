console.log("DOM HW loaded");

const titleEl = document.getElementById("page_title");
const mainEl = document.getElementById("main_content");

titleEl.textContent = "Master Chief and Cortana — Powered by JavaScript";

const imgEl = document.getElementById("spartan_img"); 

imgEl.src = "https://lumenor.ai/cdn-cgi/imagedelivery/F5KOmplEz0rStV2qDKhYag/4150a88e-8e76-42d2-d498-c6758033a100/tn";
imgEl.alt = "spartan_img";


const swapBtn = document.getElementById("swap_image_btn");
let swapped = false;

swapBtn.addEventListener("click", () => {
  if (!swapped) {
    // Secondary image - cortana_img
    imgEl.src = "https://www.researchgate.net/publication/384454707/figure/fig2/AS:11431281281022717@1727688339000/The-evolution-of-Cortanas-appearance-in-Halo-games-2001-2021-Source-What-Do-You-Think.png";
    imgEl.alt = "Secondary visual feed";
    swapped = true; 
  } else {
    // Switch back to image - spartan_img  
    imgEl.src = "https://lumenor.ai/cdn-cgi/imagedelivery/F5KOmplEz0rStV2qDKhYag/4150a88e-8e76-42d2-d498-c6758033a100/tn";
    imgEl.alt = "spartan_img";
    swapped = false;
  }
});


// toggle your highlight class.

const toggleBtn = document.getElementById("toggle_highlight_btn");
// Toggle on the <main>
toggleBtn.addEventListener("click", () => {
    mainEl.classList.toggle("cortana_glow");
});
