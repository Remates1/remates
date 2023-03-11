import { productsArray } from "./productsArray.js"

const showAllProducts = document.querySelector('.products')

if (showAllProducts !== null) {
    productsArray.forEach((product) => {
        showAllProducts.innerHTML += `
        <div class="swiper-slide swiper-slide2">
            <img class="img-carrousel-vertical" src="${product.infoImage.img}" alt="${product.infoImage.alt}">
            <div class="info-new-product">
                <h3>${product.name}</h3>
                <a href="${product.href}">Ver oferta actual</a>
            </div>
        </div>
    `
    })
}
