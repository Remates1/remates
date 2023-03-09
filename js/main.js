const locationURL = location.href;

const gitHub = 'github';

locationURL.includes(gitHub) ? '../remates/img/room-g4de92321b_1280.jpg'
    : '../img/room-g4de92321b_1280.jpg'


const productsArray = [
    {
        id: 1,
        name: 'Articulo 1',
        infoImage: {
            img: locationURL.includes(gitHub) ? '../remates/img/room-g4de92321b_1280.jpg' : '../img/room-g4de92321b_1280.jpg',
            alt: 'Articulo 1'
        },
        href: locationURL.includes(gitHub) ? '../remates/ar1.html' : '../ar1.html',
        category: ''
    },

    {
        id: 2,
        name: 'Articulo 2',
        image: '../img/wooden-bench-g6142c268b_1280.jpg',
        infoImage: {
            img: locationURL.includes(gitHub) ? '../remates/img/wooden-bench-g6142c268b_1280.jpg' : '../img/wooden-bench-g6142c268b_1280.jpg',
            alt: 'Articulo 2'
        },
        href: locationURL.includes(gitHub) ? '../remates/ar2.html' : '../ar2.html',
        category: ''
    },

    {
        id: 3,
        name: 'Articulo 3',
        infoImage: {
            img: locationURL.includes(gitHub) ? '../remates/img/copper-teapots-gb20fa09e7_1280.jpg' : '../img/copper-teapots-gb20fa09e7_1280.jpg',
            alt: 'Articulo 3'
        },
        href: locationURL.includes(gitHub) ? '../remates/ar3.html' : '../ar3.html',
        category: ''
    },

]

const showAllProducts = document.querySelector('.products')

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

/* console.log("URL:", location.href, "largo:", location.href.length) */