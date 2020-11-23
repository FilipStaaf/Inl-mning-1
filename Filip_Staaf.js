"use strict";

var books = [];

function book(book, topic, pages, isbn) {
    this.book = book;
    this.topic = topic;
    this.pages = pages;
    this.isbn = isbn;
    this.getbookInfo = function(){
        console.log("Book: " + this.book + "\nTopic: " + this.topic + "\nPages: " + this.pages + "\nISBN: " + this.isbn + "\n-------------------");
    };
}

books.push(new book("book1", "topic1", 200, "12345"));
books.push(new book("book2", "topic2", 300, "11111"));
books.push(new book("book3", "topic3", 400, "22222"));

function addBooks(){
    let addBook = prompt("How many books?", "Enter the number of books you wish to add");

    for(let i = 0; i < addBook; i++){
        books.push(new book(prompt("Enter book name"), prompt("Enter topic"), prompt("Enter pages"), prompt("Enter ISBN number")));    
    }
};

function bookInfo(){
    books.forEach(function(e){
        e.getbookInfo();
    });
};

function removeBooks(){
    var bookIndex = prompt("Which book do you want to remove?", "Enter the numeric index number of the book you wish to remove");
    var x = parseInt(bookIndex);
    books.splice(x, 1); 
    alert ("hey" + x + "!");
};

