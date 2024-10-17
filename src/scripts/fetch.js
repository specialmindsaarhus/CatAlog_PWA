//ignorer import, det er ikke vigtigt til en start...
import { url, requestOptions } from "./fetchData.js";

export function fetchCat() {
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
