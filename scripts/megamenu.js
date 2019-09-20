

var menuToggle = document.getElementById("toggle-menu");
var mainMenu = document.getElementById("top-menu");

menuToggle.addEventListener("click", showMenu);

function showMenu() {
	mainMenu.style.display = (mainMenu.style.display == "flex")? "none": "flex";
}

if(window.innerWidth >= 1050) {
	mainMenu.style.display = "flex";
}