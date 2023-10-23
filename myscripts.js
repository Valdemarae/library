class Book {
  static myLibrary = [];

  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  static addBookToLibrary() {
    let title = document.getElementById("title").value;
    let author = "Author: " + document.getElementById("author").value;
    let pages = document.getElementById("pages").value + " pages";
    let read;
    if (document.getElementById("read").checked) {
      read = "Already read the book.";
    } else {
      read = "Not read the book yet.";
    }
    this.myLibrary.push(new Book(title, author, pages, read));
  }

  static remove(id) {
    return this.myLibrary.slice(0, id).concat(this.myLibrary.slice(id+1));
  }

  static setRead(string, id){
    this.myLibrary[id].read = string;
  }

  static displayBooks(i = 0) {
    if (i == 1) {
      i = this.myLibrary.length - 1;
    }
    while (i < this.myLibrary.length) {
      const book = document.createElement("div");
      book.classList.add("book");
      
      const title = document.createElement("h2");
      title.classList.add("title");
      title.textContent = this.myLibrary[i].title;
      const author = document.createElement("p");
      author.classList.add("author");
      author.textContent = this.myLibrary[i].author;
      const pages = document.createElement("p");
      pages.classList.add("pages");
      pages.textContent = this.myLibrary[i].pages;
      const read = document.createElement("p");
      read.classList.add("read");
      read.textContent = this.myLibrary[i].read;
      
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
  
  static valid() {
    let a = document.getElementById("title").value;
    let b = document.getElementById("author").value;
    let c = document.getElementById("pages").value;
    if (a == '' || b == '' || c == ''){
      return false;
    }
    return true;
  }

  static getRead(id) {
    return this.myLibrary[id].read;
  }
}

class BooksController {
  new_book_btn = document.querySelector(".new_book");
  add_book_btn = document.querySelector(".add_book");
  form = document.querySelector("#form");

  static display_form = document.querySelector(".new_book").addEventListener("click", (e) => {
    e.preventDefault();
    if (form.style.display == 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  });
  
  static add_book = document.querySelector(".add_book").addEventListener("click", (e) => {
    e.preventDefault();
    if (Book.valid()) {
      Book.addBookToLibrary();
      Book.displayBooks(1);
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      document.getElementById("pages").value = "";
      document.getElementById("read").checked = false;
      form.style.display = 'none';
    }
  });
  
  static remove_book = document.querySelector(".books").addEventListener("click", (e) =>{
    if (e.target.classList.contains("delete_btn")) {
      books.removeChild(e.target.parentNode);
      let myLibrary = Book.remove(e.target.id);
    } else if (e.target.classList.contains("change_read_btn")) {
      let read = Book.getRead(e.target.id);
      if (read == 'Not read the book yet.') {
        Book.setRead("Already read the book.", e.target.id);
      } else {
        Book.setRead('Not read the book yet.', e.target.id);
      }
      e.target.parentNode.querySelector('.read').textContent = Book.getRead(e.target.id);
    }
  });
}

const books = document.querySelector(".books");

form.style.display = 'none';

Book.displayBooks();

BooksController.display_form;
BooksController.add_book;
BooksController.remove_book;