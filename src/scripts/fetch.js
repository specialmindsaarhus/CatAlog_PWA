import { animate } from "motion";

const url =
    "https://api.thecatapi.com/v1/images/search?size=small&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";

const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "DEMO-API-KEY",
});

var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
};

function fetchCat() {
    fetch(url, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            /*
             *
             * before
             *        *
             *
             */
            //set the result for easy use
            let fetchData = result[0];
            console.log(fetchData);

            /*
             *
             * set the image
             *
             *
             */
            //get image element
            let imageElement = document.getElementById("fetchImage");

            //set image src
            imageElement.src = `${fetchData.url}`;

            //append the image inside fetchContainer

            //document.getElementById("fetchContainer").prependChild(imageElement);

            /*
             *
             * set the H3
             *
             *
             */
            //clone image template element
            let textElement = document.getElementById("fetchText");
            //set text
            textElement.innerHTML = `${fetchData.breeds[0].name}`;

            //append the text inside fetchContainer
            //document.getElementById("fetchContainer").prependChild(textElement);

            /*
             *
             * set the H3
             *
             *
             */
            //get text element one
            let contentElement = document.getElementById("fetchContentOne");
            //set text
            contentElement.innerHTML = `${fetchData.breeds[0].temperament}`;

            /*
             *
             * set the H3
             *
             *
             */
            //get text element one
            contentElement = document.getElementById("fetchContentTwo");
            //set text
            contentElement.innerHTML = `${fetchData.breeds[0].origin}`;
            /*
             *
             * set the H3
             *
             *
             */
            //get text element one
            contentElement = document.getElementById("fetchContentThree");
            //set text
            contentElement.innerHTML = `${fetchData.breeds[0].energy_level}`;

            //append the text inside fetchContainer
            //document.getElementById("fetchContainer").prependChild(textElement);
        })
        .catch((error) => console.log("error", error));
}

function animateOut() {
    document.getElementById("fetchImage").style.opacity = 0;
    animate(
        "#fetchContainer", { y: [0, "-100vh"] }, { duration: 0.5, easing: "ease-out" }
    );
}

function loadImageIn() {
    //document.getElementById("fetchImage").style.opacity = 0;
    animate(
        "#fetchImage", { opacity: [0, 1] }, { duration: 0.2, easing: "ease-out" }
    );
}

function loadIn() {
    animate(
        "#fetchContainer", { y: [400, 0], opacity: [0, 1] }, { duration: 0.5, easing: "ease-out" }
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