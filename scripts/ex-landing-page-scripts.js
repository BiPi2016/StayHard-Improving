$(document).ready(function() {
	/*Toggles the country list in the first bar on the top*/
	var nationsMenu = $("#nations");
	var selectedNation = $("#selected-nation");
	$(selectedNation).click(function() {
		nationsMenu.slideToggle("fast");
	});
	/* Assigns the country which was clicked on as the selected country*/
	$(nationsMenu).children().click(function() {
		$(selectedNation).children().eq(0).html($(this).html());
		$(this).parent().slideUp("fast");
	});
	/*To display and hide search box on mobile view using jQuery*/
	/*$("#search-box-toggle").click(function() {
		$("#mobile-search-box").css("display")=="none"?$("#mobile-search-box").css("display", "flex"):$("#mobile-search-box").css("display", "none");
	});*/

	/* Setting the height of clear-fix */
	$("#clear-fix").height($("header").height());
	$(window).resize(function() {
		$("#clear-fix").height($("header").height());
		console.log($("#clear-fix").height());
		console.log($("header").height());
	});

	$("#mobile-view-only").css("text-transform", "lowercase"); // Hides the text 'up to 60%' in 'SALE' mega-menu item on desktop
	if($("#top-menu").css("flex-direction", "row")) {
		$("#mobile-view-only").hide();
	}
});
	

/*Triggering click-activated search-box in pure JavaScript*/
var searchToggle = document.getElementById("search-box-toggle");
var mobileSearchBox = document.getElementById("mobile-search-box");
mobileSearchBox.style.display = "none";
searchToggle.addEventListener("click", showHideMobileSearchbox);
function showHideMobileSearchbox() {
	(mobileSearchBox.style.display=="none")?mobileSearchBox.style.display="flex":mobileSearchBox.style.display="none";
}
window.onresize = function() {
	if(window.innerWidth >= 1050) {
		mobileSearchBox.style.display = "none";
	}
}
/*All category-links open the same page*/
 var allTopLevelLinks = document.querySelectorAll("#main-menu .category-link, .top-menu-link");
 allTopLevelLinks.forEach((link) => {
 	link.addEventListener("click", () => { 		
 		window.location.href = "clothes.html";//window.open("clothes.html", "_self") does the same
 	})
 });


/*Shopping cart*/
var productCount = document.getElementById("shoping-counter");
var howManyArticles = parseInt(productCount.innerText, 10);
var shopingBag = document.getElementsByClassName("sc-shoping-cart")[0];
if(howManyArticles > 0) {
	productCount.style.background = "rgba(255, 221, 0, 1)";
}
productCount.addEventListener("click", showShopingBag);

function showShopingBag () {
	document.getElementById("main-container").classList.toggle("gray-out");
	if(window.innerWidth < 450) {
		shopingBag.classList.toggle("scale-from-right");
		document.getElementById("body-overlay").classList.toggle("body-overlay-darkned");
	} else {
		shopingBag.classList.toggle("scale-from-top");
	}
}


/* For displaying Instragram promo code*/
var followUsButton = document.getElementById("clickable-follow-us-text");
var promotionCodeBox = document.getElementById("discount-code");

followUsButton.addEventListener("click", genrateInstagramPromo);

var scrollableSections = document.getElementsByClassName("product-gallery");

function genrateInstagramPromo() { 
	document.getElementById("instagram-conformation").style.display = "inline";
	promotionCodeBox.style.backgroundColor = "#6EB76E";
	promotionCodeBox.style.outline = "none";
	promotionCodeBox.style.border = "2px solid #6EB76E";
	promotionCodeBox.style.color = "white";
	promotionCodeBox.innerHTML = "";
	promotionCodeBox.appendChild(document.createTextNode("1KDJ3"));
}

/*To add functionality to toggle menu*/
var toggleMenu = document.getElementById("toggle-menu-label");
toggleMenu.addEventListener("click", openMenu);
var mainMenu = document.getElementById("top-menu");
function openMenu() {
	console.log("Menu toggle clicked");
	document.getElementById("main-container").classList.toggle("gray-out");	
	document.getElementById("body-overlay").classList.toggle("body-overlay-darkned");
	mainMenu.classList.toggle("show-main-menu");
}

/*Setting  promotional stickers and sizes on scrollable-section's child-items*/
/*Creates the sizes for clothes*/
function sizeCreator(theProduct) {
	var sizeContainer = document.createElement("div");
	var typeOfProduct = theProduct.parentNode.classList; //Element.classList retrievs a DOMTokenList 

	/*The spread operator '...' creates copies elements of tokenList and creates and array as shown below
	var listOfClasses = [...typeOfProduct];  
	*/

	/*
	Creates sizes for all upper-wears
	*/
	if(typeOfProduct.contains("upper-wear")  || typeOfProduct.contains("under-wear") || typeOfProduct.contains("gloves")) {  /*DOMTokenList.contains(token) returns true if the DOMTokenList contains the mentioned token */
	 	var sizeS = document.createElement("p");
	 	sizeS.appendChild(document.createTextNode("S"));  
	 	var sizeM = document.createElement("p");
	 	sizeM.appendChild(document.createTextNode("M"));
	 	var sizeL = document.createElement("p");
	 	sizeL.appendChild(document.createTextNode("L"));
	 	var sizeXl = document.createElement("p");
	 	sizeXl.appendChild(document.createTextNode("XL"));
	 	//Appends sizes to the div containing the sizes
	 	sizeContainer.appendChild(sizeS);
	 	sizeContainer.appendChild(sizeM);
	 	sizeContainer.appendChild(sizeL);
	 	sizeContainer.appendChild(sizeXl); 	
		sizeContainer.style.textTransform = "uppercase";
	 	
	 } else if(typeOfProduct.contains("lower-wear")) {  // Creates sizes for all lower-wears
	 	var size29 = document.createElement("p");
	 	size29.appendChild(document.createTextNode("29"));
	 	var size30 = document.createElement("p");
	 	size30.appendChild(document.createTextNode("30"));
	 	var size32 = document.createElement("p");
	 	size32.appendChild(document.createTextNode("32"));
	 	var size34 = document.createElement("p");
	 	size34.appendChild(document.createTextNode("34"));
	 	var size36 = document.createElement("p");
	 	size36.appendChild(document.createTextNode("34"));

	 	sizeContainer.appendChild(size29);
	 	sizeContainer.appendChild(size30);	
	 	sizeContainer.appendChild(size32);
	 	sizeContainer.appendChild(size34);
	 	sizeContainer.appendChild(size36);
	 }	 else if(typeOfProduct.contains("foot-wear")) {  // Creates sizes for all foot-wears
	 	var size40 = document.createElement("p");
	 	size40.appendChild(document.createTextNode("40"));
	 	var size41 = document.createElement("p");
	 	size41.appendChild(document.createTextNode("41"));
	 	var size42 = document.createElement("p");
	 	size42.appendChild(document.createTextNode("42"));
	 	var size43 = document.createElement("p");
	 	size43.appendChild(document.createTextNode("43"));
	 	var size44 = document.createElement("p");
	 	size44.appendChild(document.createTextNode("44"));
	 	var size45 = document.createElement("p");
	 	size45.appendChild(document.createTextNode("45"));
	 	var size46 = document.createElement("p");
	 	size46.appendChild(document.createTextNode("46"));

	 	sizeContainer.appendChild(size40);
	 	sizeContainer.appendChild(size41);	
	 	sizeContainer.appendChild(size42);
	 	sizeContainer.appendChild(size43);
	 	sizeContainer.appendChild(size44);
	 	sizeContainer.appendChild(size45);
	 	sizeContainer.appendChild(size46);
	 }	 

	sizeContainer.style.padding = "5px";
	return sizeContainer;  // returns the appropriate sizes for each element
}

/*Creates sticker to display how much is off*/
function promoSticker(currentProduct, offPercentage, stickerBackground = "#000", stickerTextColor = "#fff") {
	var stickerText = "";

 	var promoLogo = document.createElement("div");
 	promoLogo.style.width = "40px";
 	promoLogo.style.height = "40px";
 	promoLogo.style.borderRadius = "50%";
 	promoLogo.style.background = stickerBackground;
 	promoLogo.style.color = stickerTextColor;
 	promoLogo.style.display = "flex";
 	promoLogo.style.justifyContent = "center";
 	promoLogo.style.alignItems = "center";

 	if((typeof offPercentage) === "number") {
		stickerText = "-" + offPercentage + "%";
	} else {
		stickerText = offPercentage;
		promoLogo.style.margin = "2px";
		promoLogo.style.border = "2px solid #fff";
		promoLogo.style.boxSizing = "border-box";
	}
		
 	promoLogo.appendChild(document.createTextNode(stickerText));
 	promoLogo.style.margin = "10px";		
 	return promoLogo;	
}
/*Calculates the REA price*/
function changePrice(element, offPercentage) {
	var price = element.parentNode.children[3];

	/* Extracts numerical character from price striing and parses it into an integer, the replace method takes away the alphabatic characters*/
	var priceNum = price.textContent;
	priceNum = parseInt(priceNum.replace(" kr", ""), 10);  

	var discountedPrice = Math.floor(priceNum - priceNum * (offPercentage/100));  // Calculated discounted price
	/*Creates new span element with discounted price and styles it*/
	var newPriceContainer = document.createElement("span");
	newPriceContainer.appendChild(document.createTextNode(discountedPrice + " kr"));
	newPriceContainer.style.fontSize = "1.6em";
	newPriceContainer.style.color = "red";
	newPriceContainer.style.fontWeight = "bold";

	/*Grays out the orignal price and appends the string ord. to it*/
	price.childNodes[0].nodeValue = "  (ord. " + price.textContent + ")";
	price.style.color = "gray";
	price.style.fontSize = "80%";
	price.insertBefore(newPriceContainer, price.childNodes[0]); // Inserts the new price before the orignal content  "parentNode.insertBefore(newNode, referenceNode)"	
}

/*Selecting articles to be sold on lower prices*/
 //var promotionalProducts = document.querySelectorAll(".product-image");
var promotionalProducts =  document.querySelectorAll("#main-content .product-image").length != 0 ? document.querySelectorAll("#main-content .product-image") : document.querySelectorAll("#second-section .product-image");
promotionalProducts.forEach(function(prodImageDiv) {
	var labelText = "", labelbackground = "", labelTextColor = "";
	var brandName = prodImageDiv.parentNode.children[1].textContent.toLowerCase();
 	prodImageDiv.style.color = "#000";

 	prodImageDiv.appendChild(sizeCreator(prodImageDiv));


 	if(brandName == "gant" || brandName == "les deux") {
		changePrice(prodImageDiv, 20);
		prodImageDiv.appendChild(promoSticker(prodImageDiv, 20));
	}
	if(brandName == "fila" || brandName == "speechless") {
		changePrice(prodImageDiv, 30);
		prodImageDiv.appendChild(promoSticker(prodImageDiv, 30));
	}

	if(prodImageDiv.parentNode.classList.contains("summer-t-shirt") || prodImageDiv.parentNode.classList.contains("socks") || prodImageDiv.parentNode.classList.contains("under-wear") || prodImageDiv.parentNode.classList.contains("gloves")) {
		changePrice(prodImageDiv, 70);
		prodImageDiv.appendChild(promoSticker(prodImageDiv, 70, "#CE1E1A"));
	}

	if(brandName == "william baxter") {
		prodImageDiv.appendChild(promoSticker(prodImageDiv, "NEW", "#C7C8CA", "#808285"));
	}

 	prodImageDiv.style.display = "flex";
 	prodImageDiv.style.justifyContent = "space-between";
 	prodImageDiv.childNodes[0].style.visibility = "hidden";
 	prodImageDiv.style.backgroundSize = "cover";
	prodImageDiv.addEventListener("mouseover", showSizes);
	prodImageDiv.addEventListener("mouseout", hideSizes);


	if(brandName == "studio total") {  // Selected which articles to promote
		labelText = "Bara Hos Oss";
		labelTextColor =  "#fff";
		labelbackground = "rgba(63, 110, 93, 0.8)";
	} 

	prodImageDiv.appendChild(promoMessage(labelText, labelTextColor, labelbackground)); // Puts promotional massage on selected articles

});

function showSizes(element) {
	element.currentTarget.childNodes[0].style.visibility = "visible";
}
function hideSizes(element)	{
	element.currentTarget.childNodes[0].style.visibility = "hidden";	
}


/*Genrates a promotional massage to be displayed on articles*/
function promoMessage(labelText, labelTextColor, labelbackground) {
	var promoDiv = document.createElement("div");
	promoDiv.style.position = "absolute";
	promoDiv.style.bottom = "10%";
	promoDiv.style.backgroundColor = labelbackground;
	promoDiv.style.color = labelTextColor;
	promoDiv.style.padding = "5px";
	var promoText = document.createTextNode(labelText);
	promoDiv.appendChild(promoText);
	return promoDiv;
}

/*Providing functionality to scroll-buttons on the second sections*/
var leftArrow = document.querySelectorAll("span.left-arrow"); /*Left arrows in both scrollable sections are selected*/
var rightArrow = document.querySelectorAll("span.right-arrow");

/*Assigning event handler for all left arrows at one place*/
leftArrow.forEach(function(arrow) {  
	arrow.addEventListener("click", scrollLeft);
});

/*Assigning event handler for all right arrows */ 
rightArrow.forEach(function(arrow) {
	arrow.addEventListener("click", scrollRight);
});

/*Single function handling click event for all left arrows*/
function scrollLeft(event) {
	event.currentTarget.nextElementSibling.scrollBy(-(window.innerWidth)/4, 0);
}

/*functions handling click event for right arrows*/
function scrollRight(element) {
	element.currentTarget.previousElementSibling.scrollBy((window.innerWidth)/4, 0);
}

var galleries = document.querySelectorAll(".product-gallery");

galleries.forEach(function(gallery) {
	gallery.addEventListener("scroll", hideScrollArrows, {capture: true, passive: true});
	/*gallery.addEventListener("load", hideScrollArrows);*/ // Does not work. Have set display hidden by default in css
	var allProductsInGallery = gallery.children;  /* Links every product in every gallery to the same page named product-page.html */
	Object.keys(allProductsInGallery).forEach(function(everyProduct)  {
		allProductsInGallery[everyProduct].addEventListener("click", () => {
			if(allProductsInGallery[everyProduct].children[2])
			 console.log("you clicked on " + allProductsInGallery[everyProduct].children[2].innerText);
			window.open("product-page.html", "_self");
		})
	});
});
/*Decides which scroll arrow is to be shown or hidden as user scrolls through the image carousel*/
function hideScrollArrows(galleryScrollEvent) {
	var gallery = galleryScrollEvent.target;
	var leftButton = gallery.previousElementSibling, rightButton = gallery.nextElementSibling;
	var rightCorner = gallery.scrollWidth - gallery.clientWidth - 10;
	
	console.log(gallery.children[gallery.children.length-1].getBoundingClientRect().left);
	(gallery.scrollLeft >= rightCorner)?rightButton.style.display = "none":rightButton.style.display = "inline";
	(gallery.scrollLeft == 0)?leftButton.style.display = "none":leftButton.style.display = "inline";
}

/*Hiding/showing scroll to top button*/
var highestPositionYAxis = document.documentElement.scrollY || window.pageYOffset, lowestPositionYAxis = document.documentElement.scrollY || window.pageYOffset, scrollToTop = document.getElementById("is-scrolling-up");
scrollToTop.style.display = "none";  // if display = "none" is not explicitly defined the condition which evaluates if it is none in following function does not work.
scrollToTop.style.animationTimingfunction = "linear";
document.addEventListener("scroll", takeMeUp, { capture: true, passive: true});

function takeMeUp() {
	var mainPageYAxis = document.documentElement.scrollY || window.pageYOffset;
	if(mainPageYAxis >= highestPositionYAxis) {
		highestPositionYAxis = mainPageYAxis;
	} else if(mainPageYAxis < highestPositionYAxis && scrollToTop.style.display == "none") {
		scrollToTop.style.display = "flex";
		lowestPositionYAxis = highestPositionYAxis;		
	}

	if (mainPageYAxis < lowestPositionYAxis ) {
		lowestPositionYAxis = mainPageYAxis;
	} 

	if (mainPageYAxis == 0 || (lowestPositionYAxis < mainPageYAxis && scrollToTop.style.display == "flex")) {
		scrollToTop.style.display = "none";
		lowestPositionYAxis = mainPageYAxis;
		highestPositionYAxis = mainPageYAxis;
	}
}

var countDown = document.getElementById("offer-validity-counter");
var theDate = new Date();
console.log(theDate);

var checkOutLink = document.getElementsByClassName("sc-add-to-cart-customized")[0];
if(!checkOutLink == undefined) {
	checkOutLink.addEventListener("click", () => {
		window.open("check-out.html", "_self");
	})
}
/*Prevent scrolling while menu or shoping cart is open*/
