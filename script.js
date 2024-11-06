// Exemplu de date cu cărți
const books = [
    { title: "Mândrie și prejudecată", author: "Jane Austen", },
    { title: "1984", author: "George Orwell" },
    { title: "Cronicile din Narnia", author: "C.S. Lewis" },
    { title: "Frankenstein", author: "Mary Shelley" },
    { title: "Micul Prinț", author: "Antoine de Saint-Exupéry" }
];

// Funcție pentru a căuta cărți
function searchBooks() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Curățăm lista înainte de a adăuga rezultate

    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(input));

    filteredBooks.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} - ${book.author}`;
        bookList.appendChild(li);
    });
}

// Adăugăm un event listener pentru butonul de căutare
document.getElementById('searchButton').addEventListener('click', searchBooks);