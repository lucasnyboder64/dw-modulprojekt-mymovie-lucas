import { genres } from "../genres.js";
import { GenrePill } from "./GenrePill.js";

export function Movie(title, image, rating, withGenre, genre_ids) {
    const movie = document.createElement("div");
    console.log(genre_ids);
    console.log("genres: ", genre_ids && genre_ids.map((genre_id)=>genres.find((genre)=>genre.id==genre_id).name));
    movie.classList.add("movie");
    if (!withGenre) {
        movie.innerHTML = `
        <img src="${image}" class="thumb">

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
        <img src="${image}" class="thumb">

        <div id="info">
            <h1>${title}</h1>
            <div class="rating">
                <img src="images/star.svg" class="star">
                <p class="rating_text">${rating} /10 IMDb</p>
            </div>

            <div class="genres">
                <p>${genre_ids && genre_ids.map((genre_id)=>GenrePill(genres.find((genre)=>genre.id==genre_id).name)).join("")}</p>
            </div>
        </div>
    `;
        return movie;
    }
}