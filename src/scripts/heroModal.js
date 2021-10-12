import GetImages from "./heroImages";

class HeroModal {
    constructor(el) {
        this.el = el;
        this.getHeroID(el);
        this.fetchHeroInfo = this.fetchHeroInfo.bind(this);
        this.fillModal = this.fillModal.bind(this);
        this.presentModal = this.presentModal.bind(this);
        this.closeModal();
    }

    getHeroID(ele) {
        ele.addEventListener("click", event => {
            if (event.target.parentElement.tagName === "LI") {
                let parentID = event.target.parentElement.id;
                this.fetchHeroInfo(parentID);
            }
        });
        //fetch things when the right element is clicked
    }

    async fetchHeroInfo(id) {
        const response = await fetch(`https://overwatch-api.tekrop.fr/hero/${id}`);
        const heroInfoObject = await response.json();
        const heroImages = new GetImages().imagesArray;
        this.fillModal(heroInfoObject, heroImages[id]);
    }

    fillModal(hero, heroObj) {
        const modalElement = document.querySelector(".modal")
        let html = `
        <div class="modal-header">
            <div class="title">${hero.name}</div>
            <button class="modal-close-btn">&times;</button>
        </div>
        <div class="modal-body">
            <div class="hero-basics">
                <div class="hero-profile-img"><img src="${heroObj.portraits.icon}"></div>
                <div class="hero-basic-info">${hero.name}</div>
                <div class="hero-basic-info">${hero.role}</div>
                <div class="hero-catchphrase">${hero.story.catchPhrase}</div>
            </div>
            <div class="hero-bio">
                <div class="hero-bio-info">${hero.story.biography.age}</div>
                <div class="hero-bio-info">${hero.story.biography.occupation}</div>
                <div class="hero-bio-info">${hero.story.biography.baseOfOperations}</div>
                <div class="affiliations">${hero.story.biography.affiliation}</div>
                <div class="backstory">${hero.story.backStory}</div>
            </div>
            <div class="hero-difficulty">
                <div class="difficulty">${hero.difficulty}</div>
            </div>
            <ul class="hero-abilities">

            </ul>
            <img src="${heroObj.portraits.full}">
        </div>
        `;
        modalElement.innerHTML = html;
        const ul = document.querySelector(".hero-abilities")
        while (ul.firstChild) ul.removeChild(ul.lastChild);
        //iterate through image files for the hero, append them to the modal-body
        for (let i = 0; i < heroObj.abilities.length; i++) {
            const li = document.createElement("li");
            li.setAttribute("class", "hero-ability");

            const name = document.createElement("div");
            name.setAttribute("class", "hero-ability-name");
            name.innerText = `${heroObj.abilities[i].name}`;

            const description = document.createElement("div");
            description.setAttribute("class", "hero-ability-description");
            description.innerText = `${heroObj.abilities[i].description}`;

            const abilityIcon = document.createElement("img");
            abilityIcon.setAttribute("class", "portrait");
            abilityIcon.setAttribute("src", `${heroObj.abilities[i].image}`);

            li.append(abilityIcon, name, description);
            ul.append(li);
        }

        const modalbody = document.querySelector(".modal-body")
        modalbody.append(ul);

        this.presentModal();
        //set up modal structure with fetched information
    }

    presentModal() {
        //enables the css to show the modal
        document.querySelector(".modal").classList.add("active");
        document.querySelector(".modal-background").classList.add("active");
    }

    closeModal() {
        const modal = document.querySelector(".modal");
        const overlay = document.querySelector(".modal-background");
        const closeBtn = document.querySelector(".modal-close-btn")
        document.addEventListener("click", event => {
            if (event.target === closeBtn || event.target === overlay) {
                document.querySelector(".modal").classList.remove("active");
                document.querySelector(".modal-background").classList.remove("active");
                while (modal.firstChild) modal.removeChild(modal.lastChild); //because you'll have appended something in fillModal
            }
        });
    }
}

export default HeroModal;

// <!--face, name, role, 
// story:catchphrase,

// story:biography:age,
// story:biography:occupation,
// story:biologrphy:baseOfOperations,
// story:biography:affiliation,
// story:backstory

// difficulty                

// ability icons 
// fullbody image
// -->

// <div class="hero-ability-icons">
// abilities - 3-4 icons
// </div>
// <div class="hero-image">
// full image - 1 large image
// </div>