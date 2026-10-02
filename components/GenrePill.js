export function GenrePill(text){
//    const genre_pill = document.createElement("span");
  //  genre_pill.classList.add("box");
    //genre_pill.textContent = text;

    return `
        <span class="genre_pill">${text.toUpperCase()}</span>
    `;
}