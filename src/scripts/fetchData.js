export const url =
  "https://api.thecatapi.com/v1/images/search?size=small&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "DEMO-API-KEY",
});

export var requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};
