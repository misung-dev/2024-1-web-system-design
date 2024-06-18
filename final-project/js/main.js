document.addEventListener("DOMContentLoaded", function () {
	const btnMore = document.getElementById("btn-more");
	if (btnMore) {
		btnMore.addEventListener("click", function () {
			window.location.href = "/final-project/ebook.html";
		});
	}

	// 공지사항
	const noticeSwiper = new Swiper(".swiper-container", {
		direction: "vertical",
		loop: true,
		autoplay: {
			delay: 1000,
		},
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

	// badges 하단으로 이동하면 사라지는 효과 적용
	const badgeEl = document.querySelector("header .badges");

	if (badgeEl) {
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
	}
});

let currentIndex = 0;

function showSlide(index) {
	const carouselImages = document.querySelector(".carousel-images");
	currentIndex = index;
	carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
	updateDots();
}

function updateDots() {
	const dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
		dot.classList.toggle("active", index === currentIndex);
	});
}

function currentSlide(index) {
	showSlide(index);
}

setInterval(() => {
	currentIndex = (currentIndex + 1) % 3;
	showSlide(currentIndex);
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
	updateDots();
});

// 광고 배너(우측 하단)
document.addEventListener("DOMContentLoaded", function () {
	const closeButton = document.querySelector(".ad-container .footer button");
	const adContainer = document.querySelector(".ad-container");

	closeButton.addEventListener("click", function () {
		adContainer.style.display = "none";
	});
});

// 뱃지 삭제 기능
document.addEventListener("DOMContentLoaded", function () {
	const closeButtons = document.querySelectorAll(".badge .close-btn");

	closeButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const badge = this.closest(".badge");
			badge.remove();
		});
	});
});
