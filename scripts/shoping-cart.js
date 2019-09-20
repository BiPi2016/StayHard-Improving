var deleteProductButtons = document.getElementsByClassName("sc-trash-bin");

for(button of deleteProductButtons) {
	button.addEventListener("click", (evt) => {
		evt.target.parentNode.parentNode.parentNode.parentNode.innerHTML = "";
		console.log("deleted")
	})
}