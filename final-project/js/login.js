document.addEventListener("DOMContentLoaded", function () {
	const loginButton = document.querySelector(".login-btn");
	const idInput = document.getElementById("id-input");
	const passwordInput = document.getElementById("password-input");
	const loginContainer = document.querySelector(".login-container");
	const saveIdCheckbox = document.getElementById("save-id-checkbox");

	// 경고 문구 생성
	const warningMessage = document.createElement("p");
	warningMessage.textContent = "아이디/비밀번호를 다시 확인해 주세요";
	warningMessage.style.color = "#ff7777";
	warningMessage.style.fontSize = "12px";
	warningMessage.style.display = "none";
	loginContainer.insertBefore(warningMessage, loginButton);

	// 페이지 로드 시 저장된 아이디가 있으면 입력 필드에 채우기
	const savedId = localStorage.getItem("savedId");
	if (savedId) {
		idInput.value = savedId;
		saveIdCheckbox.checked = true;
	}

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

	loginButton.addEventListener("click", function () {
		alert("아이디/비밀번호가 틀렸습니다. 다시 확인해 주세요.");
		if (saveIdCheckbox.checked) {
			localStorage.setItem("savedId", idInput.value);
		} else {
			localStorage.removeItem("savedId");
			idInput.value = "";
		}
		passwordInput.value = "";
		validateInputs();
	});

	saveIdCheckbox.addEventListener("change", function () {
		if (!this.checked) {
			localStorage.removeItem("savedId");
		}
	});

	validateInputs();
});
