"use strict";

var continueWithShoping = document.getElementById("continue-shoping-button");
var invalidEmailWarning = document.getElementById("invalid-e-mail-warning");
var userEmail = document.getElementById("user-e-mail");
var userPostalcode = document.getElementById("user-postal-code");
var invalidPostalcodeWarning = document.getElementById("invalid-postal-code-warning");

continueWithShoping.addEventListener("click", checkDataValidity);



function checkDataValidity() {
	if(userEmail.value.length < 1) {
		invalidEmailWarning.style.display = "block";
		userEmail.focus();
		userEmail.classList.add("flash-background");
	} else {
		if(userPostalcode.value.length < 1) {
			invalidPostalcodeWarning.style.display = "block";
			userPostalcode.focus();
		}
	}
}