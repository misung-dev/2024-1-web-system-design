document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("signup-form");
	const joinBtn = document.querySelector(".join-btn");

	const validateInput = (input, showError = true) => {
		const value = input.value.trim();
		let valid = true;

		if (input.id === "name") {
			const nameRegex = /^[가-힣]{2,5}$/;
			const positiveMessage = "멋진 이름이네요!";
			if (value === "") {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					input.parentElement.querySelector(".error-message").textContent = "필수 입력 항목입니다.";
				}
			} else if (!nameRegex.test(value)) {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					input.parentElement.querySelector(".error-message").textContent =
						"이름은 2-5 사이 한글이어야 합니다.";
				}
			} else {
				input.parentElement.classList.remove("error");
				input.parentElement.querySelector(".error-message").textContent = "";
				input.parentElement.querySelector(".positive-message").textContent = positiveMessage;
			}
		} else if (input.id === "id") {
			const idRegex = /^[a-zA-Z0-9]{5,10}$/;
			const positiveMessage = "멋진 아이디입니다!";
			if (value === "") {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					input.parentElement.querySelector(".error-message").textContent = "필수 입력 항목입니다.";
				}
			} else if (!idRegex.test(value)) {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					input.parentElement.querySelector(".error-message").textContent =
						"아이디는 영어와 숫자 조합으로 5-10자 사이여야 합니다.";
				}
			} else {
				input.parentElement.classList.remove("error");
				input.parentElement.querySelector(".error-message").textContent = "";
				input.parentElement.querySelector(".positive-message").textContent = positiveMessage;
			}
		} else if (input.id === "password") {
			const positiveMessage = "안전한 비밀번호 입니다!";
			if (value === "") {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					input.parentElement.querySelector(".error-message").textContent = "필수 입력 항목입니다.";
				}
			} else if (value.length < 8) {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					input.parentElement.querySelector(".error-message").textContent =
						"비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.";
				}
			} else {
				input.parentElement.classList.remove("error");
				input.parentElement.querySelector(".error-message").textContent = "";
				input.parentElement.querySelector(".positive-message").textContent = positiveMessage;
			}
		} else if (input.id === "password-confirm") {
			const passwordValue = document.getElementById("password").value.trim();
			const positiveMessage = "비밀번호가 일치합니다!";
			if (value === "") {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					input.parentElement.querySelector(".error-message").textContent =
						"확인을 위해 비밀번호를 한 번 더 입력해주세요.";
				}
			} else if (value !== passwordValue) {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					input.parentElement.querySelector(".error-message").textContent =
						"비밀번호가 일치하지 않습니다.";
				}
			} else {
				input.parentElement.classList.remove("error");
				input.parentElement.querySelector(".error-message").textContent = "";
				input.parentElement.querySelector(".positive-message").textContent = positiveMessage;
			}
		} else if (input.id === "email-local" || input.id === "email-domain") {
			const emailLocal = document.getElementById("email-local").value.trim();
			const emailDomain = document.getElementById("email-domain").value.trim();
			const emailValue = `${emailLocal}@${emailDomain}`;
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			const englishRegex = /^[a-zA-Z0-9@.]*$/;
			const positiveMessage = "멋진 이메일이네요!";

			const emailGroup = input.closest(".form-group");
			const emailError = emailGroup.querySelector(".email-error");
			const emailFormatError = emailGroup.querySelector(".email-format");
			const emailLanguageError = emailGroup.querySelector(".email-language-error");
			const emailOptionError = emailGroup.querySelector(".email-option-error");
			const emailPositiveMessage = emailGroup.querySelector(".positive-message");

			if (emailLocal === "" || emailDomain === "") {
				valid = false;
				if (showError) {
					emailGroup.classList.add("error");
					emailError.style.display = "block";
					emailFormatError.style.display = "none";
					emailLanguageError.style.display = "none";
					emailOptionError.style.display = "none";
					emailPositiveMessage.textContent = "";
				}
			} else if (!englishRegex.test(emailLocal)) {
				valid = false;
				if (showError) {
					emailGroup.classList.add("error");
					emailError.style.display = "none";
					emailFormatError.style.display = "none";
					emailLanguageError.style.display = "block";
					emailOptionError.style.display = "none";
					emailPositiveMessage.textContent = "";
				}
			} else if (!emailRegex.test(emailValue)) {
				valid = false;
				if (showError) {
					emailGroup.classList.add("error");
					emailError.style.display = "none";
					emailFormatError.style.display = "block";
					emailLanguageError.style.display = "none";
					emailOptionError.style.display = "none";
					emailPositiveMessage.textContent = "";
				}
			} else if (emailDomain === "") {
				valid = false;
				if (showError) {
					emailGroup.classList.add("error");
					emailError.style.display = "none";
					emailFormatError.style.display = "none";
					emailLanguageError.style.display = "none";
					emailOptionError.style.display = "block";
					emailPositiveMessage.textContent = "";
				}
			} else {
				emailGroup.classList.remove("error");
				emailError.style.display = "none";
				emailFormatError.style.display = "none";
				emailLanguageError.style.display = "none";
				emailOptionError.style.display = "none";
				emailPositiveMessage.textContent = positiveMessage;
			}
		}

		return valid;
	};

	const checkFormValidity = () => {
		const nameInput = document.getElementById("name");
		const idInput = document.getElementById("id");
		const passwordInput = document.getElementById("password");
		const passwordConfirmInput = document.getElementById("password-confirm");
		const emailLocalInput = document.getElementById("email-local");
		const emailDomainInput = document.getElementById("email-domain");
		const requiredCheckboxes = document.querySelectorAll(
			'.terms input[type="checkbox"]:not(.all-consent)'
		);

		const inputs = [
			nameInput,
			idInput,
			passwordInput,
			passwordConfirmInput,
			emailLocalInput,
			emailDomainInput,
		];
		const allValid = inputs.every((input) => validateInput(input, false));
		const requiredCheckboxesChecked = Array.from(requiredCheckboxes)
			.filter((checkbox) => checkbox.parentElement.querySelector(".terms-required"))
			.every((cb) => cb.checked);

		joinBtn.disabled = !(allValid && requiredCheckboxesChecked);
	};

	form.addEventListener("submit", function (event) {
		event.preventDefault(); // 폼 제출 막기

		const nameInput = document.getElementById("name");
		const idInput = document.getElementById("id");
		const passwordInput = document.getElementById("password");
		const passwordConfirmInput = document.getElementById("password-confirm");
		const emailLocalInput = document.getElementById("email-local");
		const emailDomainInput = document.getElementById("email-domain");

		let valid = true;

		valid &= validateInput(nameInput);
		valid &= validateInput(idInput);
		valid &= validateInput(passwordInput);
		valid &= validateInput(passwordConfirmInput);
		valid &= validateInput(emailLocalInput);
		valid &= validateInput(emailDomainInput);

		if (valid) {
			const user = {
				name: nameInput.value.trim(),
				id: idInput.value.trim(),
				password: passwordInput.value.trim(),
				email: `${emailLocalInput.value.trim()}@${emailDomainInput.value.trim()}`,
			};

			localStorage.setItem("user", JSON.stringify(user));
			alert("회원가입이 완료되었습니다! 로그인 페이지로 이동합니다!");
			window.location.href = "login.html";
		}
	});

	const inputs = form.querySelectorAll("input, select");
	inputs.forEach((input) => {
		input.addEventListener("blur", function () {
			validateInput(this, true);
			checkFormValidity();
		});
		input.addEventListener("input", function () {
			validateInput(this, false);
			checkFormValidity();
		});
	});

	// 전체동의 체크박스 처리
	const allConsentCheckbox = document.querySelector('.terms input[type="checkbox"].all-consent');
	const consentCheckboxes = document.querySelectorAll(
		'.terms input[type="checkbox"]:not(.all-consent)'
	);

	allConsentCheckbox.addEventListener("change", function () {
		const checked = this.checked;
		consentCheckboxes.forEach((checkbox) => {
			checkbox.checked = checked;
		});
		checkFormValidity();
	});

	consentCheckboxes.forEach((checkbox) => {
		checkbox.addEventListener("change", function () {
			if (!this.checked) {
				allConsentCheckbox.checked = false;
			} else {
				const allChecked = Array.from(consentCheckboxes)
					.filter((checkbox) => checkbox.parentElement.querySelector(".terms-required"))
					.every((cb) => cb.checked);
				allConsentCheckbox.checked = allChecked;
			}
			checkFormValidity();
		});
	});

	// 페이지 로드 시 초기 버튼 상태 설정
	checkFormValidity();
});
