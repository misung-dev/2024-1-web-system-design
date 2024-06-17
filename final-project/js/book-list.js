document.addEventListener("DOMContentLoaded", () => {
	const categoryButtons = document.querySelectorAll(".category button");

	categoryButtons.forEach((button) => {
		button.addEventListener("click", () => {
			categoryButtons.forEach((btn) => btn.classList.remove("active"));
			button.classList.add("active");
		});
	});
});

function toggleSubmenu(id) {
	const submenu = document.getElementById(id);
	const icon = document.getElementById(id + "Icon");

	if (submenu.style.display === "block") {
		submenu.style.display = "none";
		icon.textContent = "+";
	} else {
		submenu.style.display = "block";
		icon.textContent = "-";
	}
}
