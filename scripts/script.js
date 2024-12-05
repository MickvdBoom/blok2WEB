var openButton = document.querySelector("header div button");
var sluitButton = document.querySelector("nav button");
var deNav = document.getElementById("hamburgerMenu")
var openNavTwee = document.querySelector(".knopTwee a")
var sluitNavTwee = document.querySelector(".navTwee button")
var navTwee = document.querySelector(".navTwee")

openButton.addEventListener("click", openMenu)
sluitButton.addEventListener("click", sluitMenu)
openNavTwee.addEventListener("click", openTweede)
sluitNavTwee.addEventListener("click", sluitTweede)

function openMenu() {  
//    console.log("menu is geopend")
    deNav.classList.add("toonMenu");
}

function sluitMenu() {  
    // console.log("menu is gesloten")
     deNav.classList.remove("toonMenu");
}

function openTweede() {
    // console.log("nav 2 is open")
    navTwee.classList.add("toonMenuTwee")
}

function sluitTweede() {
    // console.log("nav 2 is dicht")
    navTwee.classList.remove("toonMenuTwee");
}