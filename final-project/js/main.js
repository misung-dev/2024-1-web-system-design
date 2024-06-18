// 공지사항
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

// 페이지 상단으로 이동하는 아이콘
document.getElementById("to-top").addEventListener("click", function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

// badges 하단으로 이동하면 사라지는 효과 적용
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
	"scroll",
	_.throttle(function () {
		const scrollY = window.scrollY;
		console.log(scrollY);
		if (scrollY > 800) {
			gsap.to(badgeEl, 0.6, {
				opacity: 0,
				y: 200,
				onComplete: function () {
					badgeEl.style.display = "none";
				},
			});
			gsap.to(toTopEl, 0.6, {
				opacity: 1,
				backgroundColor: "#fff",
				border: "1px solid gray",
			});
		} else {
			badgeEl.style.display = "block";
			gsap.to(badgeEl, 0.6, {
				opacity: 1 - scrollY / 800,
				y: 0,
			});
			gsap.to(toTopEl, 0.6, {
				opacity: 0,
				backgroundColor: "transparent",
				border: "none",
			});
		}
	}, 300)
);

// FOOTER Swiper
document.addEventListener("DOMContentLoaded", function () {
	const swiperWrapper = document.querySelector(".swiper-wrapper");
	const swiperSlides = document.querySelectorAll(".swiper-slide");
	const swiperPrev = document.querySelector(".swiper-prev");
	const swiperNext = document.querySelector(".swiper-next");

	let currentIndex = 0;
	const slidesPerView = 4; // Number of slides per view
	const slideWidth =
		swiperSlides[0].offsetWidth + parseInt(getComputedStyle(swiperSlides[0]).marginRight, 10);

	function updateSliderPosition() {
		swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
	}

	swiperPrev.addEventListener("click", function () {
		if (currentIndex > 0) {
			currentIndex--;
			updateSliderPosition();
		}
	});

	swiperNext.addEventListener("click", function () {
		if (currentIndex < swiperSlides.length - slidesPerView) {
			currentIndex++;
			updateSliderPosition();
		}
	});

	// Initial call to set the position correctly
	updateSliderPosition();
});
