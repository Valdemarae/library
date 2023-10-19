let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = "Author: " + document.getElementById("author").value;
  let pages = document.getElementById("pages").value + " pages";
  let read;
  if (document.getElementById("read").checked) {
    read = "Already read the book.";
  } else {
    read = "Not read the book yet.";
  }
  myLibrary.push(new Book(title, author, pages, read));
}

function displayBooks(i = 0) {
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
    
    const change_read_btn = document.createElement("button");
    change_read_btn.classList.add("change_read_btn");
    change_read_btn.textContent = "Toggle read status";
    change_read_btn.setAttribute("id", i)

    const delete_btn = document.createElement("button");
    delete_btn.classList.add("delete_btn");
    delete_btn.textContent = "Delete This Book";
    delete_btn.setAttribute("id", i)

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    book.appendChild(change_read_btn)
    book.appendChild(delete_btn);
    
    books.appendChild(book);
    i++;
  }
}

function valid() {
  a = document.getElementById("title").value;
  b = document.getElementById("author").value;
  c = document.getElementById("pages").value;
  if (a == '' || b == '' || c == ''){
    return false;
  }
  return true;
}

const books = document.querySelector(".books");
const new_book_btn = document.querySelector(".new_book");
const add_book_btn = document.querySelector(".add_book");
const form = document.querySelector("#form");

displayBooks();

form.style.display = 'none';
new_book_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (form.style.display == 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});

add_book_btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (valid()) {
    addBookToLibrary();
    displayBooks(myLibrary.length - 1);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
    form.style.display = 'none';
  }
});

books.addEventListener("click", (e) =>{
  if (e.target.classList.contains("delete_btn")) {
    books.removeChild(e.target.parentNode);
    myLibrary = myLibrary.slice(0, e.target.id).concat(myLibrary.slice(e.target.id+1));
  } else if (e.target.classList.contains("change_read_btn")) {
    let read = myLibrary[e.target.id].read;
    if (read == 'Not read the book yet.') {
      myLibrary[e.target.id].read = "Already read the book.";
    } else {
      myLibrary[e.target.id].read = 'Not read the book yet.';
    }
    e.target.parentNode.querySelector('.read').textContent = myLibrary[e.target.id].read;
  }
});