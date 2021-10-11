Overview
_______________________
This app presents you with a list of all playable characters in Overwatch. 
Organizes the characters in a list or grid view - alphabetically or by difficulty rating
Click on a character to find out more about them and their abilities. 


Functionality
______________________
The user will be able to click on a character icon - this page will have the ability to sort through the characters alphabetically or by difficulty rating as well as display the grid as a scrollable list
- this will let them view the character's biographical information and a list of abilities the character is able to use
- clicking on an ability will open a small window with a description of the ability
    - maybe have a small gif of the ability to help the user visualize it

WireFrames / Renders 
_______________________
-Main page: ![main](https://user-images.githubusercontent.com/48140022/136584369-fcc0e72f-b6e0-40be-a194-c14c71f52220.PNG)
 - each image here will be a clickable element that will open a modal with the character information
 - there will be css when hovering over the elements which will make them pop up towards the user
 - 2 buttons on the top right of the page will let the user order the elements in a grid or as a list
 - there will also be a list to sort the characters alphabetically or in terms of diffuculty rating

-Character page: ![hero](https://user-images.githubusercontent.com/48140022/136585467-0cbca98e-497c-412f-877e-bab0b89f3c94.PNG)
 - this is the modal that will open when a character is selected
 - the character's health will be displayed as color coded blocks - each block will be worth 25 hit points 
 - character's bio is shown as well as all of their abilities
 - hovering on an ability will pop it up slightly 
 - clicking on the ability will open another modal that provides more information about the ability

Technologies 
________________
 - D3.js to create some of the visualization - like the health bars
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
    - do I need to get all the information into a CSV? - will contain information on gifs/videos for the characters?
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









