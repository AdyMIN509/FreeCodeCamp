// DOM element
const closeListButton = document.getElementById("close-list-button");
const categoryList = document.getElementById('category-list');
const viewCategoryButton = document.getElementById("view-category-button");
const mainSection = document.getElementById('main-section');
const formSection = document.getElementById('form-section');
const addBookmarkButton = document.getElementById("add-bookmark-button");
const categoryName = document.querySelectorAll(".category-name");
const dropDown = document.getElementById("category-dropdown");
const closeFormButton = document.getElementById("close-form-button");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const addBookmarkButtonForm = document.getElementById("add-bookmark-button-form");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const deleteBookmarkButton = document.getElementById("delete-bookmark-button");


// FUNCTIONS
function getBookmarks() {
	let bookMarks;
	try {
		bookMarks = JSON.parse(localStorage.getItem('bookmarks'));
	} catch {
		return [];
	}

	if (!Array.isArray(bookMarks)) {
		return [];
	}

	const isValid = bookMarks.every(b =>
		b !== null &&
		typeof b === 'object' &&
		typeof b.name === 'string' &&
		typeof b.category === 'string' &&
		typeof b.url === 'string'
	);

	return isValid ? bookMarks : [];
}

function displayOrCloseForm() {
	mainSection.classList.toggle('hidden');
	formSection.classList.toggle('hidden');
}

function updateBookmark() {
	const bookMarksArr = getBookmarks();

	bookMarksArr.push({
		name: nameInput.value,
		category: dropDown.value,
		url: urlInput.value,
	});
	localStorage.setItem('bookmarks', JSON.stringify(bookMarksArr));
	nameInput.value = "";
	urlInput.value = "";
	displayOrCloseForm();
}

function displayOrHideCategory() {
	mainSection.classList.toggle('hidden');
	bookmarkListSection.classList.toggle('hidden');
}

function renderCategoryList() {
	const bookMarksArr = getBookmarks();
	categoryList.innerHTML = "";
	const filterBookMarks = bookMarksArr.filter(e => e.category === dropDown.value);

	if (filterBookMarks.length === 0) {
		categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
	} else {
		filterBookMarks.forEach(b => {
			categoryList.innerHTML += `<input type="radio" name="bookmarks" value="${b.name}" id="${b.name}" /><label for="${b.name}"><a href="${b.url}" target="_blank">${b.name}</a></label>`;
		});
	}
}


// EVENT LISTENER
addBookmarkButton.addEventListener('click', () => {
	categoryName.forEach(e => e.textContent = dropDown.value);
	displayOrCloseForm();
});

closeFormButton.addEventListener('click', displayOrCloseForm);

addBookmarkButtonForm.addEventListener('click', updateBookmark);

viewCategoryButton.addEventListener('click', () => {
	categoryName.forEach(e => {
		e.textContent = dropDown.value;
	});
	renderCategoryList();
	displayOrHideCategory();
});

closeListButton.addEventListener('click', displayOrHideCategory);

deleteBookmarkButton.addEventListener('click', () => {
	const bookMarksArr = getBookmarks();
	const allRadio = Array.from(document.querySelectorAll('[name="bookmarks"]'));
	const checkedRadio = allRadio.filter(e => e.checked)[0];

	if (checkedRadio) {
		const aElement = checkedRadio.nextElementSibling.querySelector('a');
		const indexToDelete = bookMarksArr.findIndex(e =>
			e.name === checkedRadio.value &&
			e.category === dropDown.value &&
			e.url === aElement.getAttribute('href')
		);

		if (indexToDelete !== -1) {
			bookMarksArr.splice(indexToDelete, 1);
			localStorage.setItem('bookmarks', JSON.stringify(bookMarksArr));
			renderCategoryList();
		}
	}
});