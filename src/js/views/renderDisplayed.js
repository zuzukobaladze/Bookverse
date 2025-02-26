import { IndexElements } from './base'
import Swal from 'sweetalert2'

const renderDisplayedBook = book => {
    let stock = book.amount_in_stock ? 'In Stock' : 'Out of Stock';
    const markup = `<section class="product-details spad">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="book-detail-container">
                                        <div class="book-detail">
                                            <img alt="img "src="${book.book_cover}"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="product__details__text">
                                        <h3>${book.title}</h3>
                                        <div class="product__details__rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                            <span>(18 reviews)</span>
                                        </div>
                                        <div class="product__details__price">$${book.price}.00</div>
                                        <p>${book.description}</p>
                                        <div class="product__details__quantity">
                                            <div class="quantity">
                                                <div class="pro-qty">
                                                    <input type="text" value="1">
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" data-bookid="${book._id}" class="primary-btn">ADD TO CARD</a>
                                        <a href="#" data-bookid="${book._id}" class="heart-icon"><span class="icon_heart_alt"></span></a>
                                        <ul>
                                            <li><b>Availability</b> <span>${stock}</span></li>
                                            <li><b>Share on</b>
                                                <div class="share">
                                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="product__details__tab">
                                        <ul class="nav nav-tabs" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                                    aria-selected="true">Description</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                                    aria-selected="false">Information</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                                    aria-selected="false">Reviews <span>(1)</span></a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                                <div class="product__details__tab__desc">
                                                    <h6>Products Infomation</h6>
                                                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                                                        suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                                                        vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                                                        Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                                                        accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                                        pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                                                        elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                                        et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                                        vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                                                        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                                        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                                        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                                                        porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                                                        sed sit amet dui. Proin eget tortor risus.</p>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="tabs-2" role="tabpanel">
                                                <div class="product__details__tab__desc">
                                                    <h6>Products Infomation</h6>
                                                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                                        sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                                        eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                                        sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                                        diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                                        Proin eget tortor risus.</p>
                                                    <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                                        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                                        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                                                </div>
                                            </div>
                                            <div class="tab-pane" id="tabs-3" role="tabpanel">
                                                <div class="product__details__tab__desc">
                                                    <h6>Products Infomation</h6>
                                                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                                        sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                                        eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                                        sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                                        diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                                        Proin eget tortor risus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section class="related-product">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="section-title related__product__title">
                                        <h2>Related Product</h2>
                                    </div>
                                </div>
                            </div>
                            <div id="related-row" class="row">

                            </div>
                        </div>
                    </section>`

    IndexElements.footer.insertAdjacentHTML('beforebegin', markup);
}

const renderRelatedProducts = (book) => {
    const markup = `
                    <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg">
                                <div class="book-container">
                                    <a href="#${book._id}">
                                        <div class="book" data-bookid="${book._id}">
                                            <img alt="img" src="${book.book_cover}"/>
                                        </div>
                                    </a>
                                </div>
                                <ul class="product__item__pic__hover">
                                    <li><a><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#">${book.title}</a></h6>
                                <h5>$${book.price}.00</h5>
                            </div>
                        </div>
                    </div>`

        document.querySelector('#related-row').insertAdjacentHTML('beforeend', markup);
}

export const renderDisplayedBookResult = books => {
    books.forEach(el => {
        renderDisplayedBook(el)
    });
}

export const renderDisplayedRelated = books => {
    books.forEach(el => {
        renderRelatedProducts(el)
    })
}

export const addToCart = (state, element) => {
    state.cart.addBook(element.dataset.bookid, state.searchAll.result);

    let book = `
                <div class="book-container">
                    <div class="book">
                        <a href="#${state.cart.books[state.cart.books.length - 1]._id}">
                            <img alt="img "src="${state.cart.books[state.cart.books.length - 1].book_cover}"/>
                        </a>
                    </div>
                </div>
                `

    IndexElements.headerPrice.forEach(el => el.innerHTML = `$${state.cart.total}.00`);
    IndexElements.cartItemsNum.forEach(el => el.innerHTML = state.cart.books.length);

    localStorage.setItem('cartTotal', state.cart.total);
    localStorage.setItem('cartNum', state.cart.books.length);
    localStorage.setItem('cartBooks', JSON.stringify(state.cart.books));

    Swal.fire({
        icon: 'success',
        html: book,
        footer:'1 item added to Cart',
        showCloseButton: true,
        timer: 2500,
        timerProgressBar: true,
        didOpen: () => {
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100)
        }
    })
}

export const addToFavs = (state, element) => {
    state.favs.addBook(element.dataset.bookid, state.searchAll.result);

    let book = `
                <div class="book-container">
                    <div class="book">
                        <a href="#${state.favs.books[state.favs.books.length - 1]._id}">
                            <img alt="img "src="${state.favs.books[state.favs.books.length - 1].book_cover}"/>
                        </a>
                    </div>
                </div>
                `

    IndexElements.favItemsNum.forEach(el => el.innerHTML = state.favs.books.length);

    localStorage.setItem('favNum', state.favs.books.length);
    localStorage.setItem('favBooks', JSON.stringify(state.favs.books));

    Swal.fire({
        icon: 'success',
        html: book,
        footer:'1 item added to Favourites',
        showCloseButton: true,
        timer: 2500,
        timerProgressBar: true,
        didOpen: () => {
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100)
        }
    })
}

export const clearDisplayedBook = () => {
    if(document.querySelector('.product-details') || document.querySelector('.related-product')){
        document.querySelector('.product-details').remove()
        document.querySelector('.related-product').remove()
    }
}