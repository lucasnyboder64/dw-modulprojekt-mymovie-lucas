import { Image } from "./components/Image.js";
import { GenrePill } from "./components/GenrePill.js";

let token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2UyMmY2ZTViNmE5YTdjMWU1OWUyNDBlMDg1OWExZSIsIm5iZiI6MTc5MDU3ODY4OC42MjMwMDAxLCJzdWIiOiI2YWJhMTAwMGE4MTNiOThiNTQwNDA0Y2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4W43qlkFjJPQ7fXwxbMSVrrneDq0JpFsrx7H7I5-HQw";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get("id");
const moviedb_url = "https://api.themoviedb.org/3/movie/" + id;
const image_url = "https://image.tmdb.org/t/p/original/";
const header = document.querySelector("header");
const main = document.querySelector("main");
const detail_top = document.querySelector("#detail_top");
const film_title = document.querySelector("#film_title");
const film_detail = document.querySelector("#film_detail");
const ratingDiv = document.createElement("section");

const description = document.querySelector("#description");
const cast = document.createElement("section");
cast.classList.add("cast_section");

const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", function(){location.href="index.html"});

fetch(moviedb_url + "?append_to_response=credits", {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
}).then(response => response.json()).then(data => {
  let img = document.createElement("img");
  img.src = image_url + data.poster_path;
  img.classList.add("detail_image");

  detail_top.classList.add("detail_top");
  detail_top.append(img);
  film_detail.innerHTML = `<h1 id=film_title>${data.title}</h1>
  <img src="images/star.svg" class="star">
                <p class="rating_text">${data.vote_average} /10 IMDb</p>
                `;
  
  const genres = document.createElement("div");
  genres.classList.add("genres");

 // genres.innerHTML = `<p class="genre_pill_text">${genre_ids && genre_ids.map((genre_id)=>GenrePill(genres.find((genre)=>genre.id==genre_id).name.toUpperCase())).join("")}</p>`;
  //console.log(genre_ids);
  console.log(data);
  description.innerHTML = `
    <h1 id=description_text>Description</h1>
    <p id=overview>${data.overview}</p>
  `;

  const castText = document.createElement("p");
  castText.classList.add("cast_text");
  castText.textContent = "Cast";


  data.credits.cast.forEach(actor => {
    cast.innerHTML += `<img src=${"https://image.tmdb.org/t/p/original/"+actor.profile_path} class=actor>`
  });

  film_detail.append(description, cast, castText);

  main.append(detail_top);
  main.append(film_detail, genres);
});