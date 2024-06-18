document.querySelectorAll(".book-img-sub img").forEach(function (img) {
	img.addEventListener("mouseover", function () {
		document.getElementById("main-img").src = this.src;
	});
});
