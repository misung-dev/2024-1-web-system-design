let selectedMainCategory = null;
let selectedSubcategory = null;

document.addEventListener("DOMContentLoaded", () => {
	const categoryButtons = document.querySelectorAll(".category button");

	categoryButtons.forEach((button) => {
		button.addEventListener("click", () => {
			categoryButtons.forEach((btn) => btn.classList.remove("active"));
			button.classList.add("active");
		});
	});

	const mainCategoryLinks = document.querySelectorAll(".main-menu-category .menu-item a");
	mainCategoryLinks.forEach((link) => {
		link.addEventListener("mouseover", () => {
			clearMainCategorySelection();
			link.classList.add("selected");
			selectedMainCategory = link.getAttribute("data-category");
		});
	});

	const urlParams = new URLSearchParams(window.location.search);
	const category = urlParams.get("category");
	const subcategory = urlParams.get("subcategory");

	if (category && subcategory) {
		loadBooks(category, subcategory);
		selectedMainCategory = category;
		selectedSubcategory = subcategory;
		highlightMainCategory();
		highlightSubcategory();
		highlightSidebar();
		openMainCategory();
	} else {
		loadBooks("all");
	}
});

function clearMainCategorySelection() {
	const mainCategoryLinks = document.querySelectorAll(".main-menu-category .menu-item a");
	mainCategoryLinks.forEach((link) => {
		link.classList.remove("selected");
	});
}

function toggleSubmenu(id) {
	const submenu = document.getElementById(id);
	const icon = document.getElementById(id + "Icon");

	if (submenu.style.display === "block") {
		submenu.style.display = "none";
		icon.textContent = "+";
	} else {
		submenu.style.display = "block";
		icon.textContent = "-";
	}
}

function loadBooks(category, subcategory) {
	const fileMap = {
		domestic: "./database/domestic-book-list.json",
		foreign: "./database/foreign-book-list.json",
		ebook: "./database/ebook-book-list.json",
	};

	const allFiles = [
		"./database/domestic-book-list.json",
		"./database/foreign-book-list.json",
		"./database/ebook-book-list.json",
	];

	const fetchData =
		category === "all"
			? Promise.all(allFiles.map((url) => fetch(url).then((response) => response.json())))
			: fetch(fileMap[category]).then((response) => response.json());

	fetchData
		.then((data) => {
			const bookListContainer = document.getElementById("book-list");
			bookListContainer.innerHTML = "";

			const books =
				category === "all"
					? data.flatMap((d) => d.categoryList.flatMap((c) => c.books))
					: data.categoryList.find((c) => c.category === subcategory).books;

			books.forEach((book) => {
				const bookItem = document.createElement("div");
				bookItem.classList.add("book-item");

				const bookImageContainer = document.createElement("div");
				bookImageContainer.classList.add("book-image-container");

				const bookImage = document.createElement("img");
				bookImage.src = book.imageUrl;
				bookImage.alt = book.name;

				bookImageContainer.appendChild(bookImage);

				const bookTitle = document.createElement("p");
				bookTitle.classList.add("book-title");
				bookTitle.textContent = book.name;

				const bookAuthor = document.createElement("p");
				bookAuthor.classList.add("book-author");
				bookAuthor.textContent = book.author;

				const bookPrice = document.createElement("p");
				bookPrice.classList.add("book-price");
				bookPrice.textContent = book.price;

				[bookImageContainer, bookTitle, bookAuthor, bookPrice].forEach((element) => {
					element.addEventListener("click", () => {
						window.location.href = "book-detail.html";
					});
				});

				bookItem.appendChild(bookImageContainer);
				bookItem.appendChild(bookTitle);
				bookItem.appendChild(bookAuthor);
				bookItem.appendChild(bookPrice);

				bookListContainer.appendChild(bookItem);
			});
		})
		.catch((error) => console.error("Error fetching the book data:", error));
}

function selectMainCategory(event, category) {
	event.preventDefault();
	selectedMainCategory = category;
	selectedSubcategory = null; // 서브카테고리 초기화
	highlightMainCategory();
	highlightSubcategory(); // 서브카테고리 하이라이트 초기화
	highlightSidebar(); // 사이드바 하이라이트 초기화
}

function highlightMainCategory() {
	const mainCategoryLinks = document.querySelectorAll(".main-menu-category .menu-item");
	mainCategoryLinks.forEach((item) => {
		const link = item.querySelector("a");
		if (link.getAttribute("data-category") === selectedMainCategory) {
			item.classList.add("selected");
		} else {
			item.classList.remove("selected");
		}
	});
}

function highlightSubcategory() {
	const subCategoryLinks = document.querySelectorAll(".sub-menu-category a");
	subCategoryLinks.forEach((link) => {
		if (link.textContent === selectedSubcategory) {
			link.classList.add("selected");
		} else {
			link.classList.remove("selected");
		}
	});
}

function highlightSidebar() {
	const sidebarMainLinks = document.querySelectorAll(".sidebar .menu-item a");
	const sidebarSubLinks = document.querySelectorAll(".sidebar .submenu a");

	sidebarMainLinks.forEach((link) => {
		if (link.getAttribute("data-category") === selectedMainCategory) {
			link.classList.add("selected");
		} else {
			link.classList.remove("selected");
		}
	});

	sidebarSubLinks.forEach((link) => {
		if (link.textContent === selectedSubcategory) {
			link.classList.add("selected");
		} else {
			link.classList.remove("selected");
		}
	});
}

function openMainCategory() {
	const submenus = document.querySelectorAll(".submenu");
	const icons = document.querySelectorAll(".toggle-icon");

	submenus.forEach((submenu) => {
		if (submenu.id.includes(selectedMainCategory)) {
			submenu.style.display = "block";
		} else {
			submenu.style.display = "none";
		}
	});

	icons.forEach((icon) => {
		if (icon.id.includes(selectedMainCategory)) {
			icon.textContent = "-";
		} else {
			icon.textContent = "+";
		}
	});
}

function navigateToSubcategory(event, subcategory) {
	event.preventDefault();
	if (selectedMainCategory) {
		selectedSubcategory = subcategory;
		highlightSubcategory();
		window.location.href = `book-list.html?category=${selectedMainCategory}&subcategory=${subcategory}`;
	} else {
		alert("먼저 메인 카테고리를 선택하세요.");
	}
}
