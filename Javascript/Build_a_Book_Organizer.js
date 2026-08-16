const books = [
  { title: "Le Petit Prince", authorName: "Antoine de Saint-Exupéry", releaseYear: 1943 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "L'Étranger", authorName: "Albert Camus", releaseYear: 1942 },
  { title: "Harry Potter à l'école des sorciers", authorName: "J.K. Rowling", releaseYear: 1997 },
  { title: "Les Misérables", authorName: "Victor Hugo", releaseYear: 1862 },
  { title: "Le Seigneur des anneaux", authorName: "J.R.R. Tolkien", releaseYear: 1954 },
  { title: "Fahrenheit 451", authorName: "Ray Bradbury", releaseYear: 1953 },
  { title: "Don Quichotte", authorName: "Miguel de Cervantes", releaseYear: 1605 },
  { title: "Crime et Châtiment", authorName: "Fiodor Dostoïevski", releaseYear: 1866 },
  { title: "Le Comte de Monte-Cristo", authorName: "Alexandre Dumas", releaseYear: 1844 },
];

function sortByYear(book1, book2) {
	const b1yr = book1.releaseYear;
	const b2yr = book2.releaseYear;

	if (b1yr < b2yr) {return -1}
	else if (b1yr > b2yr) {return 1}
	else {return 0}
}

const filteredBooks = books.filter((book)=> book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);