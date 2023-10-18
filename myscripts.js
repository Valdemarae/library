const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = prompt('title');
  let author = prompt('author');
  let pages = prompt('pages');
  let read = prompt('read');
  myLibrary.push(new Book(title, author, pages, read));
}

let i = 0;
function displayBooks() {
  while (i < myLibrary.length) {
    const book = document.createElement("div");
    book.classList.add("book");

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = myLibrary[i].title;
    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = myLibrary[i].author;
    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.textContent = myLibrary[i].pages;
    const read = document.createElement("p");
    read.classList.add("read");
    read.textContent = myLibrary[i].read;

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    
    books.appendChild(book);
    i++;
  }
}

const books = document.querySelector("div");
addBookToLibrary();
displayBooks();