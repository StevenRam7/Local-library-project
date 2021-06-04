function findAccountById(accounts, id) {
  const check = accounts.find((account) => id === account.id);
  return check;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
   const result = books.reduce((acc, book) => acc + book.borrows.filter(borrow => borrow.id === account.id).length, 0);
  return result;  
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksHeld = books.filter((book) => book.borrows.find((borrow) => borrow.id === account.id && borrow.returned === false));
  const authorX = booksHeld[0].authorId;
  const relevantAuthors = authors.find((author) => author.id === authorX);
  booksHeld[0].author = relevantAuthors;
  return booksHeld;
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
