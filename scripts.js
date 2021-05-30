const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function(){
        const recipeImage = card.getAttribute("id");
        const recipeTitle = card.querySelector(".recipe-title").innerHTML;
        const recipeAuthor = card.querySelector(".recipe-author").innerHTML;
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("img").src = `./assets/${recipeImage}.png`;
    })
}

function closeModal () {
    modalOverlay.classList.remove('active');
}
