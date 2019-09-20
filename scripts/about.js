var openClose = (document.getElementById("side-navigation-heading")) ? document.getElementById("side-navigation-heading") : document.getElementById("side-nav-heading");
var myMenu = openClose.nextElementSibling;
openClose.addEventListener("click", toggleController );
function toggleController(evt) {
	myMenu.style.display = (myMenu.style.display == "block") ? "none" : "block";
}

window.addEventListener("resize", autoWidthChecker, {passive:true});
window.addEventListener("load", autoWidthChecker, {passive:true});

function autoWidthChecker() {
	if(!openClose.parentElement.classList.contains("sc-shoping-cart-size-container")) {
		if(window.innerWidth >= 960) {
			myMenu.style.display = "block";
		} else {
			myMenu.style.display = "none";
		}
	}
}