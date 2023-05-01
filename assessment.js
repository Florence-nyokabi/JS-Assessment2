const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

// 1. Create a function called getAvailableBooks that returns an array of all available
// books.
function getAvailableBooks(){
    const allBooks = [];
    for(let i = 0; i < books.length; i++){
        return  allBooks.push(books.title[i]);
    }
    return allBooks.length
}
console.log(getAvailableBooks());

// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getBooksByAuthor(author){
    authorList = {};
    const filterAuthor = books.forEach(book => {
        return authorList.push[books.author] = [books.title]
    });
}
console.log(getBooksByAuthor());

// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
function addNewBook(books1){
    const newLibrary = book1.forEach(book => {
        return books.push([book.title, book.author, book.publicationYear, book.isAvailable]);
    });

}
const books1 = [
    {title: "Born A crime", author: "Trevoh Noah", publicationYear: 2008, isAvailable: "True"}
];
console.log(addNewBook(newLibrary));

// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(title){
    for (let i = 0; i < books.length; i++) {
        if(books.isAvailable === "true"){
            const element = books.isAvailable("False");
            // const changeAvailability = books.isAvailable  "false";
            console.log(`${book.title} is unavailable.`);
        }

    }
}
isAvailable();

// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(title){
    for (let i = 0; i < books.length; i++){
        if(books.isAvailable === "false"){
            const isTrue = books.isAvailable("True");
            console.log(`${book.title} is available.`);
        }
    }
}
returnBook();