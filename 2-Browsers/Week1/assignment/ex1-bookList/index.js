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
//cspell: enable

function createBookList(books) {
  const bookList = document.createElement('ul');
  bookList.style.display = 'flex'; // Flexbox for side-by-side layout
  bookList.style.gap = '20px'; // Add space between items
  bookList.style.padding = '10px';

  books.forEach(book => {
    const bookContent = document.createElement('p');
    bookContent.textContent = `${book.title} by ${book.author}`;
    const bookItem = document.createElement('li');
    const bookCover = document.createElement('img');
    const imageName = book.title.toLowerCase().replace(/\s+/g, '_') + '.jpg';
    bookCover.src = `assets/${imageName}`;
    bookCover.alt = 'book cover';
    book.alreadyRead === true ? bookItem.classList.add('read') : bookItem.classList.add('unread')

    // Change the style of the book based on whether it has been read
    bookItem.style.backgroundColor = book.alreadyRead ? 'green' : 'red';
    bookItem.style.padding = '10px';
    bookItem.style.marginBottom = '10px';
    
     // Add some spacing for book content
    bookContent.style.margin = '10px';
    bookItem.appendChild(bookContent);
    bookItem.appendChild(bookCover);
    bookList.appendChild(bookItem);
  })
  return bookList;
};

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
  const container = document.querySelector('#bookList');
  if (container) {
    container.appendChild(ulElement);
  } else {
    console.error('Container element #bookList not found.');
  }
}

window.addEventListener('load', main);
