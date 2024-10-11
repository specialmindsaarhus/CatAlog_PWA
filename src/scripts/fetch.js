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
        .then(() => {
            animate(
                "#fetchContainer", { y: [400, 0] }, { duration: 0.5, easing: "ease-out" }
            );
        })
        .catch((error) => console.log("error", error));
}

// Run the fetch operation when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", (event) => {
    fetchCat();
});

document.getElementById("newCat").addEventListener("click", (event) => {
    fetchCat();
});