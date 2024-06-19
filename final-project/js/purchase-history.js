document.getElementById("confirm-button").addEventListener("click", function () {
	const userConfirmed = confirm(`구매확정을 하시겠습니까?
구매확정 이후에는 반품/교환 신청하실 수 없으니, 꼭 상품을 받은 후 구매확정 해주세요.`);
	if (userConfirmed) {
		alert("구매가 확정되었습니다.");
	}
});

document.getElementById("refund-button").addEventListener("click", function () {
	const userConfirmed = confirm(`환불을 신청하시겠습니까?
환불 신청 페이지로 이동합니다.`);
	if (userConfirmed) {
		alert("환불 신청 페이지로 이동 완료");
		window.location.href = "#";
	}
});
