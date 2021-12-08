import HeroList from "./scripts/heroesList";
import HeroModal from "./scripts/heroModal";

document.addEventListener("DOMContentLoaded", getHeroList()
    .catch(error => {
        console.log("something went wrong");
        console.log(error);
    })
);

async function getHeroList() {
    const response = await fetch("https://overwatch-api.tekrop.fr/heroes/");
    const heroListArray = await response.json();
    const heroes = await heroPage(heroListArray);
    const heroGrid = document.querySelector("#hero-grid");
    // const selectButton = document.querySelector('.org-word')[0]
    new HeroModal(heroGrid);
}

function heroPage(array) {
    new HeroList(array);
};

// window.onload = function () {
//     document.getElementsByClassName('org-word')[0].focus();
// }





