/*Toggles the class so that the text explainging the category is shown/hidden*/
var categoryExplanation = document.getElementById("category-explanation");
categoryExplanation.addEventListener("click", showCategoryExplanation);
function showCategoryExplanation() {
	categoryExplanation.classList.toggle("show-category-explanation");
}

/*Displays user's position on the page*/
var whereOnThePage = document.getElementById("where-on-the-page");

/*Toggles the Underkategori Menu*/
var menuOpenClose = document.getElementsByClassName("sub-category-selector");  
var selectedSubCategory = menuOpenClose.nextElementSibling;
Array.prototype.map.call(menuOpenClose, elem => {
	elem.addEventListener("click", toggleSubCategory);
});

function toggleSubCategory(evt) {
	var image = evt.currentTarget.children[1].children[0] ;// currentTarget is the element on which the event is defined in this case menuOpenClose	
	var listToDisplay = evt.currentTarget.nextElementSibling;
	if(listToDisplay.style.height == "100%") {
		listToDisplay.style.height = "0px";   //listToDisplay.classList.toggle("show-sub-category"); // Works perfectly
		image["src"] = "images/clothes/down-arrow.svg";
	} else {
		listToDisplay.style.height = "100%";
		listToDisplay.style.background = "#fff";
		image["src"] = "images/clothes/up-arrow-angle.svg";		
	}
}

var allFilters = document.getElementsByClassName("filter-categories")[0];
var mainContent = document.getElementById("main-content");

/* Organizes side navigatinal bar and filter containers */
var topLevelContainer = document.getElementsByClassName("top-level-container")[0];
var sideNavigation = document.getElementsByTagName("aside")[0];
window.addEventListener("resize", desktopSideNavigationDisplayer);
window.addEventListener("load", desktopSideNavigationDisplayer);
var pageMap = document.getElementsByClassName("page-map")[0];
function desktopSideNavigationDisplayer() {                  // Unwraps the underkategori side navigation and other information
	var sideNavigationParent = sideNavigation.parentNode;

	if( window.innerWidth >= 960) {	
		topLevelContainer.insertBefore(sideNavigation, topLevelContainer.firstChild);
		unwrapFilters();
		loadSideNavigation();			
		
	} else if(window.innerWidth < 960) {
		pageMap.parentNode.insertBefore(sideNavigation, pageMap.parentNode.children[1]);
		hideFilters();
		if(actuallNavBar.children[1]) {
			actuallNavBar.children[1].style.display = "none";			
		}
		actuallNavBar.children[0].style.display = "block";
	}

}

var filterHeading = document.getElementsByClassName("filters")[0];
function unwrapFilters() {
	filterHeading.nextElementSibling.style.height = "100%"  /*Necesary to make filters visible by default on desktop view in case the user 
	switchs from mobile to desktop view after open/hidiing the filters on mobile view*/
}
function hideFilters() {
	filterHeading.nextElementSibling.style.height = "0px";
}
/*Creates the side navigation*/
var actuallNavBar = document.getElementsByClassName("sub-category-menu")[0];
var tempSideNavigationItems = document.getElementById("all-items-we-sell-new").cloneNode(true); 
var sale = document.querySelector("#top-menu #sale").cloneNode(true);
sale.style.margin = "10px 3px";
var deals = document.querySelector("#top-menu #deals").cloneNode(true);	
deals.style.margin = "10px 3px";	
var toppListan = document.createElement("li");
toppListan.appendChild(document.createTextNode("toppListan"));
toppListan.style.margin = "10px 3px";
tempSideNavigationItems.appendChild(sale); 
tempSideNavigationItems.appendChild(deals);
tempSideNavigationItems.appendChild(toppListan);
/* If node.cloneNode() is not provided true as argument its by default false and in this case the child-nodes of 'node' wont be 
copied in the new element */

function loadSideNavigation() {		
	actuallNavBar.appendChild(tempSideNavigationItems); 
	actuallNavBar.children[0].style.display = "none";
	actuallNavBar.children[1].style.display = "block";
	//actuallNavBar.replaceChild(tempSideNavigationItems, actuallNavBar.children[0]);  // Achieves same effect as above two lines of code
}

/*var topMenuItem = document.getElementsByClassName("top-menu-item");
var topMenuOptions = document.querySelectorAll(".top-menu-subcategory a"); /*Selects all the p elements*/
sideMenuOptions = tempSideNavigationItems.getElementsByTagName("a");
/*Applies event listner to a tags to show submenus*/
Object.keys(sideMenuOptions).forEach(function(menuItem) {
	sideMenuOptions[menuItem].addEventListener("click", showSubs);
	sideMenuOptions[menuItem].addEventListener("mouseover", (evt) => {
		console.log(evt.target.parentNode)
		if(evt.target.parentNode.classList.contains("innermost-category") || evt.target.parentNode.classList.contains("innermost-li")) {
			evt.target.style.background = "rgba(255, 221, 0, 1)";
		}
	});
	sideMenuOptions[menuItem].addEventListener("mouseout", (evt) => {
		if(evt.target.parentNode.classList.contains("innermost-category") || evt.target.parentNode.classList.contains("innermost-li")) {
			evt.target.style.background = "none";
		}
	});
});

function showSubs(event) {
	var currentLink = event.target;
	currentLink.style.color = "#000";
	Object.keys(sideMenuOptions).forEach(function(menuItem) {
		var everyLinkItem = sideMenuOptions[menuItem]
		if(everyLinkItem != currentLink) {
			everyLinkItem.style.color = "#808285"; // This color value is named '--dark-gray' in css files
		}
		if(everyLinkItem.parentNode.classList.contains("innermost-li")) {
			everyLinkItem.style.borderBottom = "none";
		}
	});
	if (currentLink.parentNode.childElementCount > 1) {  
		currentLink.nextElementSibling.style.display = "block";
		var menuItems = currentLink.nextElementSibling.children;/*Selcts the ul elements which is the second child of its parent, hence sibling to the a tag displaying a name for the category*/
	} else if(!currentLink.parentNode.classList.contains("top-menu-link")) {  // Excludes 'up to 60%' part of 'sale' side-nav option
		if(!currentLink.parentNode.classList.contains("top-menu-item")) {  //Excludes all top side-nav options
			currentLink.style.borderBottom = "2px solid yellow";
		}	
	}	
	 
	/*menuItems being an HTMLCollection needs Object.keys and froEach or other ES6 methods such as Array.from or for-of to surf through its elements */
	/*following forEach method shows the childitems of the nextElementSibling of clicked p element i.e. the ul containg inner-most menu options*/
	
	if(menuItems) {   //Only Executes if the clicked link has sub-categories 
		Object.keys(menuItems).forEach(function(mItem) {
			//(menuItems[mItem].style.display =="" || menuItems[mItem].style.display =="none")?menuItems[mItem].style.display = "block":menuItems[mItem].style.display = "none";
			if(menuItems[mItem].style.display == "block") {
				menuItems[mItem].style.display = "none";
				menuItems[mItem].style.margin = "0px";
			} else {
				menuItems[mItem].style.display = "block";
				menuItems[mItem].style.margin = "5px";
			}
		});
	}
}

