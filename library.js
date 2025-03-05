console.log("Library");

const bookName = [
  "A Song of Ice and Fire",
  "The Great Gatsby",
  "Crime & Punishment",
  "Great Expectations",
  "You Don't Know JS",
];
const favoriteBooks = [];
console.log(bookName.length);

const addFavoriteBook = (bookName) => {
  for (let i = 0; i < bookName.length; i++) {
    if (bookName[i].includes("Great")) {
    } else {
      favoriteBooks.push(bookName[i]);
    }
    console.log(bookName[i]);
  }
};

addFavoriteBook(bookName);
console.log(favoriteBooks.length);
console.log(favoriteBooks);
