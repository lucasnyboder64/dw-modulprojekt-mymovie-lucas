import { Image } from "./components/Image.js";
import { GenrePill } from "./components/GenrePill.js";
import { genres } from "./genres.js";

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

const genre_pill_container = document.createElement("div");
genre_pill_container.classList.add("genre_pill_container");

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
  
                <p class="rating_text"><img src="images/star.svg" class="star"> ${data.vote_average} /10 IMDb</p>
                `;
  
  const genres = document.createElement("div");
  genres.classList.add("genres");

  console.log(data);

  description.innerHTML = `
    <h1 id=description_text>Description</h1>
    <p id=overview>${data.overview}</p>
  `;

  const castText = document.createElement("p");
  castText.classList.add("cast_text");
  castText.textContent = "Cast";


  data.credits.cast.forEach(actor => {
    const actorDiv = document.createElement("div");

    actorDiv.innerHTML += `<img src=${"https://image.tmdb.org/t/p/original/"+actor.profile_path} class=actor>
    <p class=actor_name>${actor.name}</p>
    `

    cast.append(actorDiv);
  });
  
  for(let i=0; i<=data.genres.length-1; i++){
    genre_pill_container.innerHTML += `${GenrePill(data.genres[i].name)}`;
  }



  film_detail.append(genre_pill_container, description, castText, cast);

  main.append(detail_top);
  main.append(film_detail, genres);
});