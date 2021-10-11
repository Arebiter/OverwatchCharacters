// got initial hero data - good to make main page??
class HeroList {
    constructor(array) {
        this.heroList = array;
        this.setupMainPage(array);
        this.sortHeroes(array);
        this.setupMainPage = this.setupMainPage.bind(this);
    }

    sortHeroes(heroArray) {
        const buttons = document.getElementById("organize")
        buttons.addEventListener("click", event => {
            let sortedArray = heroArray.sort(function (a, b) {
                let heroA = undefined;
                let heroB = undefined
                if (event.target.id === "alphabet") {
                    heroA = a.name.toUpperCase();
                    heroB = b.name.toUpperCase();
                } else if ((event.target.id === "role")) {
                    heroA = a.role.toUpperCase();
                    heroB = b.role.toUpperCase();
                };
                if (heroA < heroB) {
                    return -1;
                } else if (heroA === heroB) {
                    return 0;
                } else {
                    return 1;
                }
            });
            return this.setupMainPage(sortedArray);
        })
    }

    setupMainPage(heroes) {
        const ul = document.getElementById("hero-grid");
        while (ul.firstChild) ul.removeChild(ul.lastChild);

        for (let i = 0; i < heroes.length; i++) {
            const li = document.createElement("li");
            li.setAttribute("id", `${heroes[i].key}`);

            const name = document.createElement("div");
            name.setAttribute("class", "name");
            name.innerText = `${heroes[i].name}`;

            const role = document.createElement("div");
            role.setAttribute("class", "role");
            role.innerText = `${(heroes[i].role).toUpperCase()}`;

            const portrait = document.createElement("img");
            portrait.setAttribute("class", "portrait");
            portrait.setAttribute("src", `${heroes[i].portrait}`);

            li.append(portrait, name, role);
            ul.append(li);
        }
    }
}

export default HeroList;


// find a way to use this method to grab premade components, not make them here