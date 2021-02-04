import {IndexElements} from './../views/base'
import Swal from 'sweetalert2';

export function addToCart(state, el){
    state.cart.addBook(el.closest('div').children[0].firstChild.hash, state.searchAll.result);

    IndexElements.headerPrice.forEach(el => el.innerHTML = `$${state.cart.total}.00`);
    IndexElements.cartItemsNum.forEach(el => el.innerHTML = state.cart.books.length);

    localStorage.setItem('cartTotal', state.cart.total);
    localStorage.setItem('cartNum', state.cart.books.length);
    localStorage.setItem('cartBooks', JSON.stringify(state.cart.books));

    let book = el.closest('div').children[0].cloneNode(true);

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

export function addToFavs(state, el){
    state.favs.addBook(el.closest('div').children[0].firstChild.hash, state.searchAll.result);
        
    IndexElements.favItemsNum.forEach(el => el.innerHTML = state.favs.books.length);

    localStorage.setItem('favNum', state.favs.books.length);
    localStorage.setItem('favBooks', JSON.stringify(state.favs.books));

    let book = el.closest('div').children[0].cloneNode(true);

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