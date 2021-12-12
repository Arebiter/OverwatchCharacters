# Overwatch Hero Database

<p align="center">
  <img width="854" height="480" src="https://user-images.githubusercontent.com/48140022/145725827-504a75aa-a746-4c4e-9f1b-4c9728170fd4.gif">
</p>

Recommended to open in Google Chrome

[Live Link](https://arebiter.github.io/OverwatchCharacters/)

This app presents you with a list of all playable characters in Overwatch, organized alphabetically or by role.
Clicking on a character card shows biographical and gameplay data about them. 


## FUNCTIONALITY

 - Clicking on a character card will bring up a modal showing the character's biographical information as well as their in-game abilities. 
 - The user is also able to sort the heroes alphabetically or by role.

## WIREFRAMES / RENDERS

### Main page: 
#### ![final page](https://user-images.githubusercontent.com/48140022/145428240-1a2d5459-b0de-4c99-9c74-c28f03860e40.png)

 - each image is clickable element that opens a modal with the character information
 - the character cards mimic the hover behavior of the cards in the game's hero gallery
 - the 2 buttons on the top right of the page let the user order the characters by name or role
 ```javascript
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
  ```

### Character page: 
#### ![hero_modal](https://user-images.githubusercontent.com/48140022/145428660-714e03e3-d8fe-400c-9458-e9c58912557d.png)

 - modal opens when a character is selected
 - character's bio is shown as well as all of their abilities
 - hovering on an ability will highlight it 

## TECHNOLOGIES

 - webpack
 - HTML
 - CSS/SCSS
 - Vanilla JavaScript
 - Overwatch API

## TIMELINES

 - Friday/Weekend 
    - set up project and figure out how to get the information from the api. Also figure out how to get images/icons into the project - they are likely not included in the API
    - create main view - will likely need main page class to create the grid/list for the heroes
    - figure out the structure of the project
    - understand how modals work
- Monday 
    - start making all the logic for the AJAX request 
    - get some basic styling done for the page
    - see how slow the site is, think of ways to make it faster
- Tuesday
    - create an animated background for the main page - a gif might be enough
    - work on parsing through CSV and connecting it to the page
    - ensure the information is organized correctly
- Wednesday
    - finish all styling for the project
    - add animations to the abilities images - get the ultimate ability to have a different color
    - make sure the information is presented correctly and everything is showing up
- Thusday
    - make final changes to the CSS

## NEXT STEPS
- build out the API - include more information about abilities, character health, character skins
- enable media queries in CSS to make the page more responsive
- allow the user to click on abilities - will pop up a modal with a video about the ability
- create a gallery section for each hero containing screenshots and renders from the game/ character skins





