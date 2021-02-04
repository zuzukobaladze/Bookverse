import { IndexElements } from './base';

const renderCart = (books) => {
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
                                            Update Cart</a>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="shoping__continue">
                                        <div class="shoping__discount">
                                            <h5>Discount Codes</h5>
                                            <form action="#">
                                                <input type="text" placeholder="Enter your coupon code">
                                                <button type="submit" class="site-btn">APPLY COUPON</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="shoping__checkout">
                                        <h5>Cart Total</h5>
                                        <ul>
                                            <li>Subtotal <span class="subtotal">$${total}.00</span></li>
                                            <li>Total <span class="total">$${total}.00</span></li>
                                        </ul>
                                        <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    `;

    IndexElements.hero.insertAdjacentHTML('afterend', markup);
}

const renderCartBooks = (book) => {
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

export const renderCartResult = (books) => {
    renderCart(books);
    books.forEach(el => {
        renderCartBooks(el);
    })
}

export const clearItem = (state, el) => {
    state.cart.removeBook([...document.querySelectorAll('.shoping__cart__item__close')].indexOf(el));
    el.closest('tr').remove()

    document.querySelector('.subtotal').innerHTML = `$${state.cart.total}.00`;
    document.querySelector('.total').innerHTML = `$${state.cart.total}.00`;
    IndexElements.headerPrice.forEach(el => el.innerHTML = `$${state.cart.total}.00`);
    IndexElements.cartItemsNum.forEach(el => el.innerHTML = state.cart.books.length);

    localStorage.setItem('cartTotal', state.cart.total);
    localStorage.setItem('cartNum', state.cart.books.length);
    localStorage.setItem('cartBooks', JSON.stringify(state.cart.books));
}

export const clearFullCart = () => {
    if(document.querySelector('.shoping-cart')){
        document.querySelector('.shoping-cart').remove()
    }
}