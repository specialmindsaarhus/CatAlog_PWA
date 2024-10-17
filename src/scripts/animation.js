import { animate } from "motion";

import { fetchCat } from "./fetch";

function animateOut() {
  document.getElementById("fetchImage").style.opacity = 0;
  animate(
    "#fetchContainer",
    { y: [0, "-100vh"] },
    { duration: 0.5, easing: "ease-out" }
  );
}

function loadImageIn() {
  //document.getElementById("fetchImage").style.opacity = 0;
  animate(
    "#fetchImage",
    { opacity: [0, 1] },
    { duration: 0.2, easing: "ease-out" }
  );
}

function loadIn() {
  animate(
    "#fetchContainer",
    { y: [400, 0], opacity: [0, 1] },
    { duration: 0.5, easing: "ease-out" }
  );
}

// Run the fetch operation when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", (event) => {
  fetchCat();
});

document.getElementById("newCat").addEventListener("click", (event) => {
  fetchCat();
  animateOut();
});

//tjek the image is loaded
const imageElement = document.getElementById("fetchImage");

imageElement.addEventListener("load", () => {
  console.log("Image has loaded!");
  loadIn();
  loadImageIn();
});

// Check if the image is already loaded
if (imageElement.complete) {
  console.log("Image is already loaded.");
  loadImageIn();
}
