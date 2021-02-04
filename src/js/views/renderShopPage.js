import { IndexElements } from './base'

const renderShopPage = () => {
    console.log(IndexElements.shopCover.style.display)
    IndexElements.shopCover.style.display = 'inline';
    IndexElements.priceBar.style.display = 'inline-block';
}

export const renderShopPageResult = () => {
    renderShopPage()
}