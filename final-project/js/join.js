document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("signup-form");
	const joinBtn = document.querySelector(".join-btn");

	const validateInput = (input, showError = true) => {
		const value = input.value.trim();
		const errorElement = input.parentElement.querySelector(".error-message");
		let valid = true;

		if (input.id === "name") {
			const nameRegex = /^[가-힣]{2,5}$/;
			if (value === "") {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					errorElement.textContent = "필수 입력 항목입니다.";
				}
			} else if (!nameRegex.test(value)) {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					errorElement.textContent = "이름은 2-5 사이 한글이어야 합니다.";
				}
			} else {
				input.parentElement.classList.remove("error");
				errorElement.textContent = "";
			}
		} else if (input.id === "id") {
			const idRegex = /^[a-zA-Z0-9]{5,10}$/;
			if (value === "") {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					errorElement.textContent = "필수 입력 항목입니다.";
				}
			} else if (!idRegex.test(value)) {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					errorElement.textContent = "아이디는 영어와 숫자 조합으로 5-10자 사이여야 합니다.";
				}
			} else {
				input.parentElement.classList.remove("error");
				errorElement.textContent = "";
			}
		} else if (input.id === "password") {
			if (value === "") {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					errorElement.textContent = "필수 입력 항목입니다.";
				}
			} else if (value.length < 8) {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					errorElement.textContent = "비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.";
				}
			} else {
				input.parentElement.classList.remove("error");
				errorElement.textContent = "";
			}
		} else if (input.id === "password-confirm") {
			const passwordValue = document.getElementById("password").value.trim();
			if (value === "") {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					errorElement.textContent = "확인을 위해 비밀번호를 한 번 더 입력해주세요.";
				}
			} else if (value !== passwordValue) {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					errorElement.textContent = "비밀번호가 일치하지 않습니다.";
				}
			} else {
				input.parentElement.classList.remove("error");
				errorElement.textContent = "";
			}
		} else if (input.id === "email-local" || input.id === "email-domain") {
			const emailLocal = document.getElementById("email-local").value.trim();
			const emailDomain = document.getElementById("email-domain").value.trim();
			const emailValue = `${emailLocal}@${emailDomain}`;
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			const englishRegex = /^[a-zA-Z0-9@.]*$/;
			const emailFormatError = input.parentElement.querySelector(".email-format");
			const emailLanguageError = input.parentElement.querySelector(".email-language-error");
			const emailOptionError = input.parentElement.querySelector(".email-option-error");

			if (emailLocal === "" || emailDomain === "") {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					emailFormatError.style.display = "none";
					emailLanguageError.style.display = "none";
					emailOptionError.style.display = "none";
					errorElement.style.display = "block";
					errorElement.textContent = "필수 입력 항목입니다.";
				}
			} else if (!englishRegex.test(emailLocal)) {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					emailFormatError.style.display = "none";
					emailLanguageError.style.display = "block";
					emailLanguageError.textContent = "영어로 입력해주세요.";
					emailOptionError.style.display = "none";
					errorElement.style.display = "none";
				}
			} else if (!emailRegex.test(emailValue)) {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					emailFormatError.style.display = "block";
					emailFormatError.textContent = "이메일 형식이 올바르지 않습니다.";
					emailLanguageError.style.display = "none";
					emailOptionError.style.display = "none";
					errorElement.style.display = "none";
				}
			} else if (emailDomain === "") {
				valid = false;
				if (showError) {
					input.parentElement.classList.add("error");
					emailOptionError.style.display = "block";
					emailOptionError.textContent = "이메일 옵션을 선택해주세요.";
					emailFormatError.style.display = "none";
					emailLanguageError.style.display = "none";
					errorElement.style.display = "none";
				}
			} else {
				input.parentElement.classList.remove("error");
				emailFormatError.style.display = "none";
				emailLanguageError.style.display = "none";
				emailOptionError.style.display = "none";
				errorElement.style.display = "none";
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
		const requiredCheckboxes = document.querySelectorAll('.terms input[type="checkbox"]');

		const inputs = [
			nameInput,
			idInput,
			passwordInput,
			passwordConfirmInput,
			emailLocalInput,
			emailDomainInput,
		];
		const allValid = inputs.every((input) => validateInput(input, false));
		const requiredCheckboxesChecked = Array.from(requiredCheckboxes).every((cb) => cb.checked);

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
			form.submit();
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
				const allChecked = Array.from(consentCheckboxes).every((cb) => cb.checked);
				allConsentCheckbox.checked = allChecked;
			}
			checkFormValidity();
		});
	});

	// 페이지 로드 시 초기 버튼 상태 설정
	checkFormValidity();
});
