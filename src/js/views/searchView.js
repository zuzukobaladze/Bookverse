import { IndexElements } from './base'

export const getInput = () => IndexElements.searchInput.value

const renderBook = book => {
    const markup = `<div class="book-container" id="searched">
                        <a href="#${book._id}">
                            <div class="book" data-bookid="${book._id}">
                                <img alt="img" src="${book.book_cover}"/>
                            </div>
                        </a>
                    </div>`

    IndexElements.searchSection.insertAdjacentHTML('afterend', markup);
}

export const renderBookResult = books => {
    books.forEach(renderBook)
}

export const clearSearch = () => {
    if(IndexElements.searchInput.value){
       IndexElements.searchInput.value = "" 
    }
    if(document.querySelectorAll("#searched")){
        document.querySelectorAll("#searched").forEach(el => {
            el.remove();
        })
    }
}