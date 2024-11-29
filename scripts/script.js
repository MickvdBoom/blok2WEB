var openButton = document.querySelector("header div button");
var sluitButton = document.querySelector("nav button");
var deNav = document.getElementById("hamburgerMenu")

openButton.addEventListener("click", openMenu)
sluitButton.addEventListener("click", sluitMenu)

function openMenu() {  
//    console.log("menu is geopend")
    deNav.classList.add("toonMenu");
}

function sluitMenu() {  
    // console.log("menu is gesloten")
     deNav.classList.remove("toonMenu");
}