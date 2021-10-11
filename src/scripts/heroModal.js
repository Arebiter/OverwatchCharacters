class HeroModal {
    constructor(el) {
        this.el = el;
        this.getHeroID(el);
        this.fetchHeroInfo = this.fetchHeroInfo.bind(this);
        this.fillModal = this.fillModal.bind(this);
        this.presentModal = this.presentModal.bind(this);
        // this.presentModal = this.presentModal.bind(this);
        this.closeModal();
        this.clickModalAnywhere();
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
        this.fillModal(heroInfoObject);
    }

    fillModal(hero) {

        this.presentModal();
        //set up modal structure with fetched information
    }

    presentModal() {
        //enables the css to show the modal
        document.querySelector(".modal").classList.add("active");
        document.querySelector(".modal-background").classList.add("active");
    }

    closeModal() {
        const closeBtn = document.querySelector(".modal-close-btn")
        closeBtn.addEventListener("click", () => {
            document.querySelector(".modal").classList.remove("active");
            document.querySelector(".modal-background").classList.remove("active");
        });
    }

    clickModalAnywhere() {
        const overlay = document.querySelector(".modal-background");
        overlay.addEventListener("click", event => {
            if (event.target === overlay) {
                document.querySelector(".modal").classList.remove("active");
                document.querySelector(".modal-background").classList.remove("active");
            };
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