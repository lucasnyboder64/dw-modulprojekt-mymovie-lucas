import { Movie } from "./components/Movie.js";
import { genres } from "./genres.js";
import { Box } from "./components/Box.js";

let token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2UyMmY2ZTViNmE5YTdjMWU1OWUyNDBlMDg1OWExZSIsIm5iZiI6MTc5MDU3ODY4OC42MjMwMDAxLCJzdWIiOiI2YWJhMTAwMGE4MTNiOThiNTQwNDA0Y2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4W43qlkFjJPQ7fXwxbMSVrrneDq0JpFsrx7H7I5-HQw";

let now_showing_movies = document.querySelector("#now_showing_movies");
let popular_movies = document.querySelector("#popular_movies");

let baseurl = "https://api.themoviedb.org/3/trending/movie/week";
let imageUrl = "https://image.tmdb.org/t/p/w500/";

let now_playing_url = "https://api.themoviedb.org/3/movie/now_playing";
let popular_url = "https://api.themoviedb.org/3/movie/popular";

let showing_movies = [];
let popular_movies_list = [];

let ids = [];
let genreIndicies = [];

fetch(now_playing_url, {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
}).then(response => response.json()).then(data => {
  showing_movies = [...data.results];
  addMovieSeen();
});

fetch(popular_url, {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
}).then(response => response.json()).then(data => {
  popular_movies_list = [...data.results];
  console.log(data.results[0].genre_ids);
  addMoviePopular();
  addGenre();
});

function addMoviePopular() {
  popular_movies_list.forEach((movie) => {
    popular_movies.append(Movie(movie.title, imageUrl + movie.poster_path, movie.vote_average.toFixed(2), true));
  });

  //popular_movies_list.querySelectorAll(".genres");
  console.log(popular_movies.querySelectorAll(".genres"));
}

function addGenre(){
 /* popular_movies.querySelectorAll(".genres").forEach((genre)=>{
    genre.innerHTML += "<div>test</div>";
  });*/

  popular_movies_list.forEach((elem)=>{
//    const ids = elem.genre_ids;
  //  console.log(ids);
      ids.push(elem.genre_ids);
  });

  console.log(ids);
}

function addMovieSeen() {
  showing_movies.forEach((movie) => {
    now_showing_movies.append(Movie(movie.title, imageUrl + movie.poster_path, movie.vote_average.toFixed(2), false));
  });
}
