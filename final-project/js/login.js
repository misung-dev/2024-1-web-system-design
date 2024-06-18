document.addEventListener("DOMContentLoaded", function () {
	const loginButton = document.querySelector(".login-btn");
	const idInput = document.querySelector('.login-content input[type="text"]');
	const passwordInput = document.querySelector('.login-content input[type="password"]');
	const loginContainer = document.querySelector(".login-container");

	// 경고 문구 성성
	const warningMessage = document.createElement("p");
	warningMessage.textContent = "아이디/비밀번호를 다시 확인해 주세요";
	warningMessage.style.color = "#ff7777";
	warningMessage.style.fontSize = "12px";
	warningMessage.style.display = "none";
	loginContainer.insertBefore(warningMessage, loginButton);

	function validateInputs() {
		const idValue = idInput.value.trim();
		const passwordValue = passwordInput.value.trim();

		// 정규식을 사용하여 한글 여부를 검사
		const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(idValue);

		if (hasKorean) {
			warningMessage.style.display = "block";
		} else {
			warningMessage.style.display = "none";
		}

		const allFilled = idValue !== "" && passwordValue !== "" && !hasKorean;
		loginButton.disabled = !allFilled;
	}

	idInput.addEventListener("input", validateInputs);
	passwordInput.addEventListener("input", validateInputs);

	validateInputs();
});
