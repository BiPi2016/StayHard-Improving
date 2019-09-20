var productDescriptionText = document.getElementsByClassName("product-description-text")[0];
productDescriptionText.addEventListener("click", showSemihiddenText);
function showSemihiddenText() {
	productDescriptionText.classList.toggle("show-description-text");
}


var mainImageFrame = document.getElementsByClassName("main-image")[0];
var allImagesOfCurrentDesign = document.getElementsByClassName("selected-product-image");
mainImageFrame.style.background = "url(" + allImagesOfCurrentDesign[0].src  + ") center center/cover";

var leftArrow = document.getElementsByClassName("left-arrow-container")[0];
var rightArrow = document.getElementsByClassName("right-arrow-container")[0];

leftArrow.addEventListener("click", ()=> {
	console.log("left")

} );

/*Makes the different products designs selectable and load them in the main section when clicked on*/
var allDesigns = Array.from(document.getElementsByClassName("product-color-design"));
allDesigns.forEach(function(everyDesign) {
	everyDesign.addEventListener("click", selectThis);
});

/*Loads a style as selected style when clicked */
function selectThis(evt) {
	/*Draws a black border around selected design and hides the border-bottom of the parent div which shows itself on hover on the photos*/
	var currentProduct = evt.target;
	currentProduct.style.border = "2px solid #000";
	allDesigns.filter((everyItem) => {
		if(everyItem != currentProduct) {
			everyItem.style.border = "none";
			everyItem.parentNode.borderBottomColor = "initial";
		}
	});

	/*currentProduct.classList.toggle("photo-frame-active");
	allDesigns.filter((everyItem) => {
		if(everyItem != currentProduct) {
			everyItem.style.border = "2px solid transparent";
		}
	});*/

	var newBackground = "'" + evt.target.getAttribute("src") + "'";
	mainImageFrame.style.background = "url(" + newBackground + ") center center/cover";

}
  


var toFullScreenButton = document.getElementsByClassName("full-screen-icon")[0];
toFullScreenButton.addEventListener("click", showOnFullScreen);
/*Shows the current image of selected product in a new window*/
function showOnFullScreen(evt) {
	var theAddress = window.getComputedStyle(mainImageFrame).getPropertyValue('background-image');
	var startPos = theAddress.lastIndexOf('url("file') + 5;
	var endPos = -2;
	var imageUrl = theAddress.slice(startPos, endPos);
	console.log(imageUrl);
	var newWindow = window.open(imageUrl);
}

/*var newObject = {
	theAddress : window.getComputedStyle(mainImageFrame).getPropertyValue('background-image'),
	startPos : theAddress.lastIndexOf('url("file') + 5,
	endPos : -2,
	imageUrl : theAddress.slice(startPos, endPos),
	newWindow : function() {
		window.open(imageUrl);
	}
}*/


var buyButton = document.getElementById("add-to-cart-green");
var productCounter = document.getElementById("shoping-counter");


buyButton.addEventListener("click", addToShopingCart);

function addToShopingCart() {	
	var howMany = parseInt(productCounter.innerText, 10);
	howMany++;	
	productCounter.innerText = howMany;
	if(howMany > 0) {
		productCounter.style.background = "yellow";
	} else {
		productCounter.style.background = "#EBEBEB";
	}

	var answer = window.confirm("Till Kassan");
	if(answer) {
		window.location.replace("check-out.html");
	var howMany = parseInt(productCounter.innerText, 10);
	howMany++;	
	productCounter.innerText = howMany;
	if(howMany > 0) {
		productCounter.style.background = "yellow";
	} else {
		productCounter.style.background = "#EBEBEB";
	}
	}
	console.log(howMany);
}