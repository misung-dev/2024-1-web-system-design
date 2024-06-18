document.addEventListener("DOMContentLoaded", () => {
	const categoryButtons = document.querySelectorAll(".category button");

	categoryButtons.forEach((button) => {
		button.addEventListener("click", () => {
			categoryButtons.forEach((btn) => btn.classList.remove("active"));
			button.classList.add("active");
		});
	});
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
		domestic: "/database/domestic-book-list.json",
		foreign: "/database/foreign-book-list.json",
		ebook: "/database/ebook-book-list.json",
	};

	fetch(fileMap[category])
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((data) => {
			const bookListContainer = document.getElementById("book-list");
			bookListContainer.innerHTML = ""; // Clear previous books

			data.forEach((categoryData) => {
				if (categoryData.category === subcategory) {
					categoryData.books.forEach((book) => {
						const bookItem = document.createElement("div");
						bookItem.classList.add("book-item");

						const bookImage = document.createElement("img");
						bookImage.src = `${book.imageUrl}${book.name}.jpeg`;
						bookImage.alt = book.name;

						const bookTitle = document.createElement("p");
						bookTitle.classList.add("book-title");
						bookTitle.textContent = book.name;

						const bookAuthor = document.createElement("p");
						bookAuthor.classList.add("book-author");
						bookAuthor.textContent = book.author;

						const bookPrice = document.createElement("p");
						bookPrice.classList.add("book-price");
						bookPrice.textContent = book.price;

						bookItem.appendChild(bookImage);
						bookItem.appendChild(bookTitle);
						bookItem.appendChild(bookAuthor);
						bookItem.appendChild(bookPrice);

						bookListContainer.appendChild(bookItem);
					});
				}
			});
		})
		.catch((error) => console.error("Error fetching the book data:", error));
}
