import { IndexElements } from './base'

const renderCategorized = (book) => {
    const markup = `
                    <div class="col-lg-3">
                        <div class="categories__item set-bg">
                            <div class="book-container">
                                <div class="book">
                                    <a href="#${book._id}">
                                        <img id="cover__image" alt="img"src="${book.book_cover}"/>
                                    </a>
                                </div>
                            </div>
                            <div id="book__details" class="featured__item__text">
                                <h6 id="title"><a href="#">${book.title}</a></h6>
                                <h5 id="price">$${book.price}.00</h5>
                            </div>
                        </div>
                    </div>`

    document.querySelector('#featured_books_slider').insertAdjacentHTML('afterbegin', markup);
}

export const renderCategorizedResult = (books) => {
    var a = document.querySelector('#featured_books_slider')
    while(a.firstChild){
        a.removeChild(a.lastChild)
    }

    books.forEach(book => {
        renderCategorized(book);
    });
}

export const clearCategorized = () => {
    //to be written
}