/*▪ Create an array of book objects, with title and author (where both are strings).
Create 5 objects in the array.
▪ Create an HTML page with a <ul>.
▪ Write javascript that loops over the array of book objects and create a new <li> for
each book object and add the title and author to the <li> and insert it into the <ul>.
▪ Verify that it works with any number of objects by removing 2 of the 5 objects from
the array and run it again*/

const books = [
    {title: "book1", author: "John1"},
    {title: "book2", author: "John2"},
    {title: "book3", author: "John3"},
    {title: "book4", author: "John4"},
    {title: "book5", author: "John5"}
]
const list = document.getElementById("book-list");

for (let book of books) {
    let li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author}`;
    list.appendChild(li);
}
