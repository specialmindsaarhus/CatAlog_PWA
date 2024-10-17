//ignorer import, det er ikke vigtigt til en start...
import { url, requestOptions } from "./fetchData.js";

export function fetchCat() {
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      /*
       *
       * Fetching the data
       *        *
       *
       */
      //fetching the data and console.log it - see the result in the console
      let fetchData = result[0];
      let textData = fetchData.breeds[0];
      console.log("fetchData: ", fetchData);
      console.log("textData: ", textData);

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

      //append the text inside fetchContainer
      //document.getElementById("fetchContainer").prependChild(textElement);

      /*
       *
       * set the H3
       *
       *
       */
      //get breed headline text element
      let contentElement = document.getElementById("BreedText");
      //set text
      contentElement.innerHTML = `${textData.name}`;

      /*
       *
       * set the p
       *
       *
       */
      //get text element one
      contentElement = document.getElementById("fetchContentOne");
      //set text
      contentElement.innerHTML = `${textData.temperament}`;

      /*
       *
       * set the p
       *
       *
       */
      //get text element two
      contentElement = document.getElementById("fetchContentTwo");
      //set text
      contentElement.innerHTML = `${textData.origin}`;

      /*
       *
       * set the p
       *
       *
       */
      //get text element three
      contentElement = document.getElementById("fetchContentThree");
      //set text
      contentElement.innerHTML = `${textData.energy_level}`;

      //append the text inside fetchContainer
      //document.getElementById("fetchContainer").prependChild(textElement);
    })
    .catch((error) => console.log("error", error));
}
