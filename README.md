# OVERVIEW

Recommended to open in Google Chrome

[Live Link](https://arebiter.github.io/OverwatchCharacters/)

This app presents you with a list of all playable characters in Overwatch. The heroes can be organized alphabetically or by role.
Clicking on a character card shows biographical and gameplay data about them. 


## FUNCTIONALITY

Clicking on a character card will bring up a modal showing the character's biographical information as well as their in-game abilities. 
The user is also able to sort the heroes alphabetically or by role.

## WIREFRAMES / RENDERS

### Main page: 

#### wireframe: ![main](https://user-images.githubusercontent.com/48140022/136584369-fcc0e72f-b6e0-40be-a194-c14c71f52220.PNG)
#### final: ![final page](https://user-images.githubusercontent.com/48140022/145428240-1a2d5459-b0de-4c99-9c74-c28f03860e40.png)

 - each image here will be a clickable element that will open a modal with the character information
 - there will be css when hovering over the elements which will make them pop up towards the user
 - 2 buttons on the top right of the page will let the user order the characters by name or role

### Character page: 
#### wireframe: ![hero](https://user-images.githubusercontent.com/48140022/136585467-0cbca98e-497c-412f-877e-bab0b89f3c94.PNG)
#### final: ![hero_modal](https://user-images.githubusercontent.com/48140022/145428660-714e03e3-d8fe-400c-9458-e9c58912557d.png)

 - this is the modal that will open when a character is selected
 - character's bio is shown as well as all of their abilities
 - hovering on an ability will pop it up slightly 

## TECHNOLOGIES

 - webpack to bundle the JS
 - CSS to style the page itself
 - JS to get the information from the Overwatch API
 - The Overwatch API to get all the needed character information
 - HTML to create the basic layout of the page and the character information

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





