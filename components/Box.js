export function Box(text){
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
            <p>${text}</p>
    `;

    return box;
}