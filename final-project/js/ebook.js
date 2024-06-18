// 페이지 상단으로 이동하는 아이콘
const toTopEl = document.getElementById("to-top");
if (toTopEl) {
	toTopEl.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
}
