document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".swiper-container", {
		direction: "vertical",
		loop: true,
		autoplay: {
			delay: 1000, // 1초마다 슬라이드
		},
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
});
