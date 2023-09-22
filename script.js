const categoriesBtn = document.querySelector(".header__categories-button");
const categoriesDialog = document.querySelector(".header__categories-dialog");
const categoriesArrow = document.querySelector(".header__categories-arrow");

const dialogButtonHandler = () => {
	if (categoriesDialog.open) {
		categoriesDialog.close()
		categoriesArrow.textContent = "keyboard_arrow_down";
		return
	}

	categoriesDialog.show()
	categoriesArrow.textContent = "keyboard_arrow_up";
};

categoriesBtn.addEventListener("click", dialogButtonHandler);
