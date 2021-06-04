function findAuthorById(authors, id) {
  const check = authors.find((author) => id === author.id);
  return check;
}

function findBookById(books, id) {
  const check = books.find((book) => id === book.id);
  return check;
}

function partitionBooksByBorrowedStatus(books) {
  let sortedBooks = [];
  const booksOut = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  const booksNotOut = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
  sortedBooks.push(booksOut, booksNotOut);
  return sortedBooks;
}

function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows
  .filter((borrow, index) => index < 10)
  .map((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id)
    return {
      ...account,
      ...borrow
    }
  })

  return borrowers;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
