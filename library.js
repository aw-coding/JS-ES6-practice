// const Library = function (books = []) {
//   this.books = books;
// };

let Library = class{
  constructor(books = []){
    this.books = books;
  }
}

Library.prototype.bookCount = function () {
  return this.books.length;
};

Library.prototype.addBook = function (newBook) {
  this.books.push(newBook);
};

Library.prototype.addBooks = function (newBooks) {
  newBooks.forEach(book => this.books.push(book));
};

Library.prototype.printInventory = function () {
  this.books.forEach((book) => {
    const {title, author} = book;
    console.log(`${title} by ${author}`);
  });
};

//module.exports = Library;

// export default addBooks;
// export default printInventory;

export default Library;
