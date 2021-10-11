class HeroModal {
    constructor(el) {
        this.el = el;
        this.getHeroInfo(el);
    }

    getHeroInfo(ele) {
        ele.addEventListener("click", event => {
            if (event.target.id === "ana") {
                console.log("you are clicking on a hero");
            }
        })
        //fetch things when the right element is clicked
    }

    fillModal() {
        //set up modal structure with fetched information
    }

    presentModal() {
        //enables the css to show the modal
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