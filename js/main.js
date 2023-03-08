const productsArray = [
    {
        id: 1,
        name: 'Articulo 1',
        image: '../img/room-g4de92321b_1280.jpg',
        href: '../ar1.html',
        category: ''
    },

    {
        id: 2,
        name: 'Articulo 2',
        image: '../img/wooden-bench-g6142c268b_1280.jpg',
        href: '../ar2.html',
        category: ''
    },

    {
        id: 3,
        name: 'Articulo 3',
        image: '../img/copper-teapots-gb20fa09e7_1280.jpg',
        href: '../ar3.html',
        category: ''
    },

    {
        id: 4,
        name: 'Articulo 1',
        image: '../img/room-g4de92321b_1280.jpg',
        href: '../ar1.html',
        category: ''
    },

    {
        id: 5,
        name: 'Articulo 2',
        image: '../img/wooden-bench-g6142c268b_1280.jpg',
        href: '../ar2.html',
        category: ''
    },

    {
        id: 6,
        name: 'Articulo 3',
        image: '../img/copper-teapots-gb20fa09e7_1280.jpg',
        href: '../ar3.html',
        category: ''
    },
]

const showAllProducts = document.querySelector('.products')

productsArray.forEach((product) => {
    showAllProducts.innerHTML += `
        <div class="swiper-slide swiper-slide2">
            <img class="img-carrousel-vertical" src="${product.image}" alt="">
            <div class="info-new-product">
                <h3>${product.name}</h3>
                <a href="${product.href}">Ver oferta actual</a>
            </div>
        </div>
    `
})