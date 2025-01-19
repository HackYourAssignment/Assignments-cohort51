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
  // Creating the ul element to hold the books
  const bookList = document.createElement('ul');

  // Iterate through array of books
  books.forEach((book) => {
    const listItem = document.createElement('li');

    // Changing the style of book whether read or not
    if (book.alreadyRead) {
      listItem.style.backgroundColor = 'green';
    } else {
      listItem.style.backgroundColor = 'red';
    }

    // Creating div element to hold the p elements
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'book-details';

    // For each book creating p element with title and author
    const titleElement = document.createElement('p');
    titleElement.textContent = book.title;
    titleElement.className = 'book-title';

    const authorElement = document.createElement('p');
    authorElement.textContent = book.author;
    authorElement.className = 'book-author';

    // Creating img element for each book
    const imgElement = document.createElement('img');
    imgElement.src = `./assets/${book.image}`;
    imgElement.alt = `Book cover for ${book.title}`;

    // Appending title and author to details div
    detailsDiv.appendChild(titleElement);
    detailsDiv.appendChild(authorElement);

    // Appending img and details div to li element
    listItem.appendChild(imgElement);
    listItem.appendChild(detailsDiv);

    // Appending li element to ul element
    bookList.appendChild(listItem);
  });

  return bookList;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      image: 'the_design_of_everyday_things.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      image: 'the_most_human_human.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      image: 'the_pragmatic_programmer.jpg',
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
