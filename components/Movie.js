export function Movie(title, image, rating, withGenre) {
    const movie = document.createElement("div");
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
                
            </div>
        </div>
    `;
        return movie;
    }
}