function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const booksOut = books.filter((book) => book.borrows.find((borrow) => borrow.returned === false));
  return booksOut.length;
}

function getMostCommonGenres(books) {
  const genreList = books.map((book) => book.genre);
  const sortedGenres = genreList.sort((genreA, genreB) => (genreA < genreB ? -1 : 1));
  const genre1 = sortedGenres.filter((genre) => genre === sortedGenres[0]);
  const genre2 = sortedGenres.filter((genre) => genre === sortedGenres[genre1.length]);
  const genre3 = sortedGenres.filter((genre) => genre === sortedGenres[genre1.length + genre2.length]);
  const genre4 = sortedGenres.filter((genre) => genre === sortedGenres[genre1.length + genre2.length + genre3.length]);
  const genre5 = sortedGenres.filter((genre) => genre === sortedGenres[genre1.length + genre2.length + genre3.length + genre4.length]);
  const genre1x = {name:genre1[0], count:genre1.length};
  const genre2x = {name:genre2[0], count:genre2.length};
  const genre3x = {name:genre3[0], count:genre3.length};
  const genre4x = {name:genre4[0], count:genre4.length};
  const genre5x = {name:genre5[0], count:genre5.length};
  let final = [];
  final.push(genre1x, genre2x, genre3x, genre4x, genre5x);
  const finalSorted = final.sort((finalA, finalB) => (finalA.count > finalB.count ? -1 : 1))
  return finalSorted;
  }

function getMostPopularBooks(books) {
  const borrowCount = books.map((book) => {
      return {
      name: book.title, count: book.borrows.length
    }
  }) 
  .sort((a,b) => b.count - a.count)
  .filter((a, index) => index < 5);
  return borrowCount;
  }

function getMostPopularAuthors(books, authors) {
   const authorList = authors.map((author) => {
     return {
        name: author.name.first + " " + author.name.last, count: 
        books.filter((book) => book.authorId === author.id)
        .reduce((acc, book) => acc + book.borrows.length, 0)
     }
    })
    .sort((a, b) => b.count - a.count)
    .filter((a, index) => index < 5);
    console.log(authorList);
    return authorList;
    
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
