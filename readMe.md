Overview
_______________________
Recommended to open in Google Chrome

This app presents you with a list of all playable characters in Overwatch. 
Organizes the characters in a list or grid view - alphabetically or by difficulty rating
Click on a character to find out more about them and their abilities. 


Functionality
______________________
The user will be able to click on a character card - this page will have the ability to sort through the characters alphabetically or by roles
- this will let them view the character's biographical information and a list of abilities the character is able to use

WireFrames / Renders 
_______________________
-Main page: ![main](https://user-images.githubusercontent.com/48140022/136584369-fcc0e72f-b6e0-40be-a194-c14c71f52220.PNG)
 - each image here will be a clickable element that will open a modal with the character information
 - there will be css when hovering over the elements which will make them pop up towards the user
 - 2 buttons on the top right of the page will let the user order the characters by name or role

-Character page: ![hero](https://user-images.githubusercontent.com/48140022/136585467-0cbca98e-497c-412f-877e-bab0b89f3c94.PNG)
 - this is the modal that will open when a character is selected
 - character's bio is shown as well as all of their abilities
 - hovering on an ability will pop it up slightly 

Technologies 
________________
 - webpack to bundle the JS
 - CSS to style the page itself
 - JS to get the information from the Overwatch API
 - The Overwatch API to get all the needed character information
 - HTML to create the basic layout of the page and the character information

Timeline
__________________
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

Next Steps
_______________________________
- build out the API - include more information about abilities, character health, character skins
- enable media queries in CSS to make the page more responsive
- allow the user to click on abilities - will pop up a modal with a video about the ability
- create a gallery section for each hero containing screenshots and renders from the game/ character skins









