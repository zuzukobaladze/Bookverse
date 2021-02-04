import { IndexElements } from './base';

const renderFavPage = (books) => {
    var total = 0;
    books.map(el => total+= el.price)

    const markup = `
                    <section class="shoping-cart spad">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="shoping__cart__table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th class="shoping__product">Products</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody class="books-list">
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="shoping__cart__btns">
                                        <a href="/index.html" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                                        <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                                            Update Favs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    `;

    IndexElements.hero.insertAdjacentHTML('afterend', markup);
}

const renderFavBooks = (book) => {
    const markup = `<tr>
                        <td class="shoping__cart__item">
                            <div class="book-container">
                                <div class="book">
                                    <a href="#${book._id}">
                                        <img alt="img "src="${book.book_cover}"/>
                                    </a>
                                </div>
                            </div>
                            <div class="product__item__text">
                                <a href="#${book._id}">
                                    <h6><a>${book.title}</a></h6>
                                </a>
                            </div>
                        </td>
                        <td class="shoping__cart__price">
                            $${book.price}.00
                        </td>
                        <td class="shoping__cart__quantity">
                            <div class="quantity">
                                <div class="pro-qty">
                                    <input type="text" value="1">
                                </div>
                            </div>
                        </td>
                        <td class="shoping__cart__total">
                            $${book.price}.00
                        </td>
                        <td class="shoping__cart__item__close">
                            <span class="icon_close"></span>
                        </td>
                    </tr>`
    
    document.querySelector('.books-list').insertAdjacentHTML('beforeend', markup)
}

export const renderFavResult = (books) => {
    renderFavPage(books);
    books.forEach(el => {
        renderFavBooks(el);
    })
}

export const clearItem = (state, el) => {
    state.favs.removeBook([...document.querySelectorAll('.shoping__cart__item__close')].indexOf(el));
    el.closest('tr').remove()

    IndexElements.favItemsNum.forEach(el => el.innerHTML = state.favs.books.length);

    localStorage.setItem('favNum', state.favs.books.length);
    localStorage.setItem('favBooks', JSON.stringify(state.favs.books));
}

export const clearFullFavs = () => {
    if(document.querySelector('.shoping-cart')){
        document.querySelector('.shoping-cart').remove()
    }
}