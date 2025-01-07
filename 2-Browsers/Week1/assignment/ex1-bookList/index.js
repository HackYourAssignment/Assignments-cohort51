//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/	

-----------------------------------------------------------------------------*/

function createBookList(books) {
  const bookUl = document.createElement('ul');

  books.forEach((book) => {
    const bookLi = document.createElement('li');

    const bookInfo = document.createElement('div');

    const bookTitle = document.createElement('p');
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `by: ${book.author}`;

    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);

    // Create the cover image
    const bookCover = document.createElement('img');
    bookCover.src = `assets/${book.title.replace(/ /g, '_')}.jpg`;
    bookCover.alt = book.title;
    bookCover.style.display = 'flex';

    // Set background color based on read status
    bookLi.style.backgroundColor = book.alreadyRead ? 'green' : 'red';

    // Append all elements to the list item
    bookLi.appendChild(bookInfo);
    bookLi.appendChild(bookCover);

    // Append the list item to the unordered list
    bookUl.appendChild(bookLi);
  });

  return bookUl;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
