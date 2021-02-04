export default class Cart {
    constructor(books){
        this.books = books;
        this.total = 0;
    }

    addBook(id, books) {
        id = id.replace('#', '');
        books.forEach(element => {
            if(element._id === id && !this.books.includes(element)){
                this.books.push(element);
                this.total += element.price;
            }
            //Below code if i want to remove already existing book on second click on cart button
            // else if(element._id === id && this.books.includes(element)){
            //     this.books.splice(this.books.indexOf(element), 1);
            // }
        });
    }

    removeBook(index) {
        this.total -= this.books[index].price;
        this.books.splice(index, 1);
    }
}