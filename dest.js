import { Image } from "./components/Image.js";

let token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2UyMmY2ZTViNmE5YTdjMWU1OWUyNDBlMDg1OWExZSIsIm5iZiI6MTc5MDU3ODY4OC42MjMwMDAxLCJzdWIiOiI2YWJhMTAwMGE4MTNiOThiNTQwNDA0Y2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4W43qlkFjJPQ7fXwxbMSVrrneDq0JpFsrx7H7I5-HQw";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get("id");
const moviedb_url = "https://api.themoviedb.org/3/movie/"+id;

fetch(moviedb_url, {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
}).then(response => response.json()).then(data => {
  console.log(data);
  console.log(data.poster_path);
});
