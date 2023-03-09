const productsArray = [
    {
        id: 1,
        name: 'Articulo 1',
        infoImage: {
            img: location.href.length <= 40 ? '../img/room-g4de92321b_1280.jpg' : '../remates/img/room-g4de92321b_1280.jpg',
            alt: 'Articulo 1'
        },
        href: '../ar1.html',
        category: ''
    },

    {
        id: 2,
        name: 'Articulo 2',
        image: '../img/wooden-bench-g6142c268b_1280.jpg',
        infoImage: {
            img: location.href.length <= 40 ? '../img/wooden-bench-g6142c268b_1280.jpg' : '../remates/img/wooden-bench-g6142c268b_1280.jpg',
            alt: 'Articulo 2'
        },
        href: '../ar2.html',
        category: ''
    },

    {
        id: 1,
        name: 'Articulo 1',
        infoImage: {
            img: location.href.length <= 40 ? '../img/room-g4de92321b_1280.jpg' : '../remates/img/room-g4de92321b_1280.jpg',
            alt: 'Articulo 1'
        },
        href: '../ar1.html',
        category: ''
    },

    {
        id: 2,
        name: 'Articulo 2',
        image: '../img/wooden-bench-g6142c268b_1280.jpg',
        infoImage: {
            img: location.href.length <= 40 ? '../img/wooden-bench-g6142c268b_1280.jpg' : '../remates/img/wooden-bench-g6142c268b_1280.jpg',
            alt: 'Articulo 2'
        },
        href: '../ar2.html',
        category: ''
    },

    {
        id: 1,
        name: 'Articulo 1',
        infoImage: {
            img: location.href.length <= 40 ? '../img/room-g4de92321b_1280.jpg' : '../remates/img/room-g4de92321b_1280.jpg',
            alt: 'Articulo 1'
        },
        href: '../ar1.html',
        category: ''
    },

    {
        id: 2,
        name: 'Articulo 2',
        image: '../img/wooden-bench-g6142c268b_1280.jpg',
        infoImage: {
            img: location.href.length <= 40 ? '../img/wooden-bench-g6142c268b_1280.jpg' : '../remates/img/wooden-bench-g6142c268b_1280.jpg',
            alt: 'Articulo 2'
        },
        href: '../ar2.html',
        category: ''
    },
]

const showAllProducts = document.querySelector('.products')

productsArray.forEach((product) => {
    showAllProducts.innerHTML += `
        <div class="swiper-slide swiper-slide2">
            <img class="img-carrousel-vertical" src="${product.infoImage.img}" alt="">
            <div class="info-new-product">
                <h3>${product.name}</h3>
                <a href="${product.href}">Ver oferta actual</a>
            </div>
        </div>
    `
})

console.log(location.href.length)