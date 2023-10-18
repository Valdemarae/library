const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  let title = prompt('title')
  let author = prompt('author')
  let pages = prompt('pages')
  let read = prompt('read')
  myLibrary.push(new Book(title, author, pages, read))
}

let i = 0;
while (i < myLibrary.length) {
  console.log(myLibrary[i]);
  i++;
}
