document.addEventListener("DOMContentLoaded", () => {
	const checkboxes = document.querySelectorAll('.product input[type="checkbox"]');
	const quantityInputs = document.querySelectorAll('.product input[type="number"]');
	const totalPriceElement = document.getElementById("total-price");
	const shippingFeeElement = document.getElementById("shipping-fee");
	const productListSummary = document.getElementById("product-list-summary");

	checkboxes.forEach((checkbox) => {
		checkbox.addEventListener("change", updateSummary);
	});

	quantityInputs.forEach((input) => {
		input.addEventListener("input", updateSummary);
	});

	function updateSummary() {
		let totalPrice = 0;
		let productListHtml = "";

		checkboxes.forEach((checkbox) => {
			if (checkbox.checked) {
				const productInfo = checkbox.parentElement.querySelector(".product-info");
				const productName = productInfo.querySelector("h3").innerText;
				const productPrice = parseInt(checkbox.getAttribute("data-price"));
				const productQuantity = parseInt(productInfo.querySelector('input[type="number"]').value);

				const productTotal = productPrice * productQuantity;
				totalPrice += productTotal;

				productListHtml += `<p>${productName} (${productQuantity}권)</p>`;
			}
		});

		totalPriceElement.innerText = `${totalPrice.toLocaleString()}원`;

		if (totalPrice >= 20000) {
			shippingFeeElement.innerText = "0원";
		} else {
			shippingFeeElement.innerText = "3,000원";
			totalPrice += 3000; // 배송비 추가
		}

		productListSummary.innerHTML = productListHtml;
		totalPriceElement.innerText = `${totalPrice.toLocaleString()}원`;
	}
});
