


















function createBookList(books) {
  const bookList = document.createElement('ul');
  books.forEach(book => {
    const bookItem = document.createElement('li');
    bookItem.className= 'book';
  
    const bookInfo = document.createElement ('p');
    bookInfo.textContent = `${book.title} by ${book.author} `;
    bookItem.appendChild(bookInfo);
  
    const bookImg = document.createElement('img');
    bookImg.src = book.imgSrc;
    bookImg.alt =`${book.title}`;
    bookItem.appendChild(bookImg)
    
    if (book.alreadyRead){
      bookItem.classList.add('read');
    }else { 
      bookItem.classList.add('not-read');
    }

    bookList.appendChild(bookItem)
  
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
      imgSrc : 'assets/the_design_of_everyday_things.jpg',
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      imgSrc :'assets/the_most_human_human.jpg',
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      imgSrc: 'assets/the_pragmatic_programmer.jpg',
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
