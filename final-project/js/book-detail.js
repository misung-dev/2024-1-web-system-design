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

// 장바구니 버튼 클릭시 이벤트 발생
function addToCart() {
	const notification = document.getElementById("cart-notification");
	notification.style.display = "block";
	setTimeout(function () {
		notification.style.display = "none";
	}, 2000);
}

// 바로구매 버튼 클릭시 이벤트 발생
function buyNow() {
	const userConfirmed = confirm("결제 페이지로 바로 이동하시겠습니까?");
	if (userConfirmed) {
		window.location.href = "pay.html";
	}
}
