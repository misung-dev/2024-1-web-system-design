document.addEventListener("DOMContentLoaded", () => {
	const categoryButtons = document.querySelectorAll(".category button");

	categoryButtons.forEach((button) => {
		button.addEventListener("click", () => {
			categoryButtons.forEach((btn) => btn.classList.remove("active"));
			button.classList.add("active");
		});
	});
});
