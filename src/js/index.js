import Swal from 'sweetalert2'
import Search from './models/Search';
import Cart from './models/Cart';
import Favs from './models/Favs';
import * as Buttons from './models/Buttons'
import * as searchView from './views/searchView'
import * as renderDisplayed from './views/renderDisplayed'
import * as renderHome from './views/renderHomePage'
import * as renderShop from './views/renderShopPage'
import * as renderCategorized from './views/renderCategorized'
import * as renderCart from './views/renderShoppingCart'
import * as renderFavs from './views/renderFavourites'
import { IndexElements } from './views/base'


var state = {};
state.cart = new Cart([]);
state.favs = new Favs([]);
const categories = ["#Classic","#Epic","#Detective","#Fantasy","#Horror","#Novel","#Crime","#Tragedy","#Romance","#Science-Fiction","#Fiction","#Biography","#Philosophy"]

//Render Home Page
const controlHomePage = async () => {
    //2) New search object and adding it to state
    state.searchAll = new Search("", "");

    //3) Prepare UI for results
    renderDisplayed.clearDisplayedBook()

    //4)Search for books/authors/etc...
    await state.searchAll.getAllBooks();

     //5)Render UI for results
    renderHome.renderPageResult(state.searchAll.result);
    // renderHome.test(state.searchAll.result);
}

//Render Shop Details
const controlShopDetails = async () => {
    const query = window.location.hash.replace('#', '');

    if(query){
        //2) New search object and adding it to state
        state.searchDisplayed = new Search(query, '_id');

        //3) Prepare UI for results
        renderDisplayed.clearDisplayedBook()
        renderHome.clearDynamic()
        searchView.clearSearch();
        renderCart.clearFullCart();

        //4)Search for books/authors/etc...
        await state.searchDisplayed.getByField();
        state.searchRelated = new Search(state.searchDisplayed.result[0].category, 'category');
        await state.searchRelated.getByField()

        //5)Render UI for results
        renderDisplayed.renderDisplayedBookResult(state.searchDisplayed.result);
        renderDisplayed.renderDisplayedRelated(state.searchRelated.result);

        //6)Functionality to rendered buttons
        document.querySelector('.primary-btn').addEventListener('click', function(e){
            e.preventDefault();
            renderDisplayed.addToCart(state, this);
        })

        document.querySelector('.heart-icon').addEventListener('click', function(e){
            e.preventDefault();
            renderDisplayed.addToFavs(state, this);
        })


    }
}

//Render Search
const controlSearch = async () => {
    const query = searchView.getInput();
    let field = '';

    IndexElements.checkboxes.forEach(el => {
        if(el.checked){
            field = el.name;
        }
    })
    if(query){
        //2) New search object and adding it to state
        state.search = new Search(query, field);

        //3) Prepare UI for results
        searchView.clearSearch();

        //4)Search for books/authors/etc...
        await state.search.getByField()

        //5)Render UI for results
        searchView.renderBookResult(state.search.result);
    }
}

//Render Shop Grid Page
const controlShopPage = async () => {
    //2) New search object and adding it to state
    state.searchAll = new Search("", "");

    //3) Prepare UI for results
    renderDisplayed.clearDisplayedBook();
    renderHome.clearDynamic();
    searchView.clearSearch();

    //4)Search for books/authors/etc...
    await state.searchAll.getAllBooks();

     //5)Render UI for results
    renderShop.renderShopPageResult();
}

const controlCategories = async () => {
    //1) Parse hash to get category with regex
    const regex1 = /^#|-/g;
    const regex2 = /^\s+|\s+$/g;
    const query = window.location.hash.replace(regex1, ' ').replace(regex2, '');

        //2) New search object and adding it to state
        state.searchCategories = new Search(query, 'category');

        //3) Prepare UI for results
    
        //4)Search for books/authors/etc...
        await state.searchCategories.getByField();
    
         //5)Render UI for results
        renderCategorized.renderCategorizedResult(state.searchCategories.result)
}

const controlShoppingCart = async (books) => {
            //1) Prepare UI for results
            renderCart.clearFullCart()
            renderDisplayed.clearDisplayedBook();
            renderHome.clearDynamic();
            searchView.clearSearch();

            //2)Render UI for results
            renderCart.renderCartResult(books);

            document.querySelectorAll('.shoping__cart__item__close').forEach(el => {
                el.addEventListener('click', function(){
                    renderCart.clearItem(state, el);
                })
            })
}

const controlFavPage = async (books) => {
    //1) Prepare UI for results
    renderFavs.clearFullFavs()
    renderDisplayed.clearDisplayedBook();
    renderHome.clearDynamic();
    searchView.clearSearch();

    //2)Render UI for results
    renderFavs.renderFavResult(books);

    document.querySelectorAll('.shoping__cart__item__close').forEach(el => {
        el.addEventListener('click', function(){
            renderFavs.clearItem(state, el);
        })
    })
}

//Add controllers to events

window.onload = () => {
    if(localStorage.getItem('cartNum')){
        IndexElements.cartItemsNum.forEach(el => el.innerHTML = localStorage.getItem('cartNum'));
        IndexElements.headerPrice.forEach(el => el.innerHTML = `$${localStorage.getItem('cartTotal')}.00`);
        state.cart.total = localStorage.getItem('cartTotal');
        state.cart.books = JSON.parse(localStorage.getItem('cartBooks'));  
    }
    if(localStorage.getItem('favNum')){
        IndexElements.favItemsNum.forEach(el => el.innerHTML = localStorage.getItem('favNum'));
        state.favs.books = JSON.parse(localStorage.getItem('favBooks'));
    }
    controlHomePage();
};

window.addEventListener('hashchange', () => {
    if (!window.location.hash || window.location.hash === '#') {
        controlHomePage()
    }
    else if (window.location.hash === '#shop-page'){
        controlShopPage()
    }
    else if(categories.includes(window.location.hash)){
        controlCategories()
    }
    else{
        controlShopDetails()
    }
})

IndexElements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
    searchView.clearSearch()
});

IndexElements.cartButton.forEach(el => {
    el.addEventListener('click', () => {
        Buttons.addToCart(state, el);
    })
});

IndexElements.heartButton.forEach(el => {
    el.addEventListener('click', () => {
        Buttons.addToFavs(state, el);
    })
})

IndexElements.cartBagButton.forEach(el => {
    el.addEventListener('click', () => {
        controlShoppingCart(state.cart.books);
    })
})

IndexElements.heartFavsButton.forEach(el => {
    el.addEventListener('click', () => {
        controlFavPage(state.favs.books);
    })
})

IndexElements.checkboxes.forEach(el => {
    el.addEventListener('change', function(){
        if(!el.classList.contains('.checked')){
            el.classList.add('checked');
            document.querySelectorAll('input.checkbox:not(.checked)').forEach(box => {
                box.checked = false;
            })
        }
        el.classList.remove('checked');
    })
})