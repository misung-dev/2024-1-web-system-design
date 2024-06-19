document.getElementById("used-points").addEventListener("input", function () {
	const totalPriceElement = document.getElementById("total-price");
	const remainingPointsElement = document.getElementById("remaining-points");
	const usedPointsElement = document.getElementById("used-points");
	const finalPriceElement = document.getElementById("final-price");

	const totalPrice = parseInt(
		totalPriceElement.textContent.replace(/,/g, "").replace("원", ""),
		10
	);
	const remainingPoints = parseInt(
		remainingPointsElement.textContent.replace(/,/g, "").replace("원", ""),
		10
	);
	let usedPoints = parseInt(usedPointsElement.value.replace(/,/g, ""), 10);

	if (isNaN(usedPoints) || usedPoints < 0) {
		usedPoints = 0;
	} else if (usedPoints > remainingPoints) {
		usedPoints = remainingPoints;
	}

	const finalPrice = totalPrice - usedPoints;

	// 포맷팅 함수
	function formatNumber(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
	}

	// 업데이트
	finalPriceElement.textContent = formatNumber(finalPrice);
	totalPriceElement.textContent = formatNumber(totalPrice);
	remainingPointsElement.textContent = formatNumber(remainingPoints);

	usedPointsElement.value = formatNumber(usedPoints).replace("원", "");
});

document.getElementById("checkout-button").addEventListener("click", function (event) {
	event.preventDefault(); // 기본 동작을 막음
	const finalPriceElement = document.getElementById("final-price");
	const finalPrice = finalPriceElement.textContent.replace(/,/g, "").replace("원", "");

	const formattedPrice = Number(finalPrice).toLocaleString();

	const userConfirmed = confirm(formattedPrice + "원을 결제 하시겠습니까?");
	if (userConfirmed) {
		alert("결제가 완료되어, 구매내역 조회 페이지로 이동합니다.");
		window.location.href = "purchase-history.html";
	}
});
