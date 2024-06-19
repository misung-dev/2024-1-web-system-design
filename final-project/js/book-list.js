document.addEventListener("DOMContentLoaded", () => {
	const categoryButtons = document.querySelectorAll(".category button");

	categoryButtons.forEach((button) => {
		button.addEventListener("click", () => {
			categoryButtons.forEach((btn) => btn.classList.remove("active"));
			button.classList.add("active");
		});
	});

	// URL 파라미터를 읽어 카테고리와 서브카테고리를 추출
	const urlParams = new URLSearchParams(window.location.search);
	const category = urlParams.get("category");
	const subcategory = urlParams.get("subcategory");

	// 카테고리와 서브카테고리가 존재하면 해당 도서 목록을 로드, 그렇지 않으면 모든 도서 목록을 로드
	if (category && subcategory) {
		loadBooks(category, subcategory);
	} else {
		loadBooks("all");
	}
});

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
		domestic: "/final-project/database/domestic-book-list.json",
		foreign: "/final-project/database/foreign-book-list.json",
		ebook: "/final-project/database/ebook-book-list.json",
	};

	const allFiles = [
		"/final-project/database/domestic-book-list.json",
		"/final-project/database/foreign-book-list.json",
		"/final-project/database/ebook-book-list.json",
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
