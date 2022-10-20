let mobileMenuOpen = false;

let mobileMenuButton = document.getElementById("mobile-menu-button");
let mobileMenuContainer = document.getElementById("mobile-menu-container");

function onClick() {
	if (mobileMenuOpen) {
		mobileMenuOpen = false;
		mobileMenuButton.children[0].setAttribute("src", "images/icon-hamburger.svg");
		mobileMenuContainer.style.display = "none"
	} else {
		mobileMenuOpen = true;
		mobileMenuButton.children[0].setAttribute("src", "images/icon-close.svg");
		mobileMenuContainer.style.display = "block"
	}
}

mobileMenuButton.addEventListener("click", onClick);
