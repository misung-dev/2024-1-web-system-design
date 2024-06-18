// 도서 서브 이미지 hover 효과 적용
document.querySelectorAll(".book-img-sub img").forEach(function (img) {
	img.addEventListener("mouseover", function () {
		document.getElementById("main-img").src = this.src;
	});
});

// 링크 외부로 공유
function copyUrl() {
	const url = window.location.href;
	navigator.clipboard.writeText(url).then(
		function () {
			const notification = document.getElementById("copy-notification");
			notification.style.display = "block";
			setTimeout(function () {
				notification.style.display = "none";
			}, 2000);
		},
		function (err) {
			console.error("URL 복사 실패: ", err);
		}
	);
}
