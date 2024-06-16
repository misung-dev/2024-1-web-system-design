document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("signup-form");

	const validateInput = (input) => {
		const value = input.value.trim();
		const errorElement = input.nextElementSibling;
		let valid = true;

		if (input.id === "name") {
			const nameRegex = /^[가-힣]{2,5}$/;
			if (value === "") {
				input.parentElement.classList.add("error");
				errorElement.textContent = "필수 입력 항목입니다.";
				valid = false;
			} else if (!nameRegex.test(value)) {
				input.parentElement.classList.add("error");
				errorElement.textContent = "이름은 2-5 사이 한글이어야 합니다.";
				valid = false;
			} else {
				input.parentElement.classList.remove("error");
				errorElement.textContent = "";
			}
		} else if (input.id === "id") {
			const idRegex = /^[a-zA-Z0-9]{5,10}$/;
			if (value === "") {
				input.parentElement.classList.add("error");
				errorElement.textContent = "필수 입력 항목입니다.";
				valid = false;
			} else if (!idRegex.test(value)) {
				input.parentElement.classList.add("error");
				errorElement.textContent = "아이디는 영어와 숫자 조합으로 5-10자 사이여야 합니다.";
				valid = false;
			} else {
				input.parentElement.classList.remove("error");
				errorElement.textContent = "";
			}
		} else if (input.id === "password") {
			if (value === "") {
				input.parentElement.classList.add("error");
				errorElement.textContent = "필수 입력 항목입니다.";
				valid = false;
			} else if (value.length < 8) {
				input.parentElement.classList.add("error");
				errorElement.textContent = "비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.";
				valid = false;
			} else {
				input.parentElement.classList.remove("error");
				errorElement.textContent = "";
			}
		} else if (input.id === "password-confirm") {
			const passwordValue = document.getElementById("password").value.trim();
			if (value === "") {
				input.parentElement.classList.add("error");
				errorElement.textContent = "확인을 위해 비밀번호를 한 번 더 입력해주세요.";
				valid = false;
			} else if (value !== passwordValue) {
				input.parentElement.classList.add("error");
				errorElement.textContent = "비밀번호가 일치하지 않습니다.";
				valid = false;
			} else {
				input.parentElement.classList.remove("error");
				errorElement.textContent = "";
			}
		} else if (input.id === "email") {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			const emailFormatError = input.parentElement.querySelector(".email-format");
			if (value === "") {
				input.parentElement.classList.add("error");
				errorElement.style.display = "block";
				emailFormatError.style.display = "none";
				valid = false;
			} else if (!emailRegex.test(value)) {
				input.parentElement.classList.add("error");
				errorElement.style.display = "none";
				emailFormatError.style.display = "block";
				valid = false;
			} else {
				input.parentElement.classList.remove("error");
				errorElement.style.display = "none";
				emailFormatError.style.display = "none";
			}
		}

		return valid;
	};

	form.addEventListener("submit", function (event) {
		event.preventDefault(); // 폼 제출 막기

		const nameInput = document.getElementById("name");
		const idInput = document.getElementById("id");
		const passwordInput = document.getElementById("password");
		const passwordConfirmInput = document.getElementById("password-confirm");
		const emailInput = document.getElementById("email");

		let valid = true;

		valid &= validateInput(nameInput);
		valid &= validateInput(idInput);
		valid &= validateInput(passwordInput);
		valid &= validateInput(passwordConfirmInput);
		valid &= validateInput(emailInput);

		if (valid) {
			form.submit();
		}
	});

	const inputs = form.querySelectorAll("input");
	inputs.forEach((input) => {
		input.addEventListener("blur", function () {
			validateInput(this);
		});
	});
});
