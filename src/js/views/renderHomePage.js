const slugify = require('slugify')
import { IndexElements } from './base'

function renderFeatured(book, bookFrame, detailFrame) {
    const markupCover = `<a href="#${book._id}">
                            <div class="book" data-bookid="${book._id}">
                                <img alt="img" src="${book.book_cover}"/>
                            </div>
                        </a>`

    const markupDetail = `<h6><a href="#">${book.title}</a></h6>
                          <h5>$${book.price}.00</h5>`


    bookFrame.insertAdjacentHTML('afterbegin', markupCover);
    detailFrame.insertAdjacentHTML('beforeend', markupDetail);
}

export const renderPageResult = books => {
    IndexElements.featuredBooks.forEach((frame, i) => {
        let random = Math.floor(Math.random()*29);
        renderFeatured(books[random], frame, IndexElements.booksDetails[i]);
    })
}

export const clearDynamic = () => {
    if(IndexElements.dynamic){
            IndexElements.dynamic.forEach(el => {
            el.remove()
        })
    }
}
