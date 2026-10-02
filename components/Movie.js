import { genres } from "../genres.js";
import { GenrePill } from "./GenrePill.js";

export function Movie(title, image, rating, withGenre, genre_ids, movie_id) {
    const movie = document.createElement("div");
    movie.classList.add("movie");
    if (!withGenre) {
        movie.innerHTML = `
        <img src="${image}" class="thumb" onclick=location.href="detail.html?id="+${movie_id}>

        <div id="info">
            <h1>${title}</h1>
            <div class="rating">
                <img src="images/star.svg" class="star">
                <p class="rating_text">${rating} /10 IMDb</p>
            </div>
        </div>
    `;
        return movie;
    } else {
        movie.innerHTML = `
        <img src="${image}" class="thumb" onclick=location.href="detail.html?id="+${movie_id}>

        <div id="info">
            <h1>${title}</h1>
            <div class="rating">
                <img src="images/star.svg" class="star">
                <p class="rating_text">${rating} /10 IMDb</p>
            </div>

            <div class="genres">
                <p class="genre_pill_text">${genre_ids && genre_ids.map((genre_id)=>GenrePill(genres.find((genre)=>genre.id==genre_id).name.toUpperCase())).join("")}</p>
            </div>
        </div>
    `;
        return movie;
    }
}

// https://api.themoviedb.org/3/movie/{movie_id}