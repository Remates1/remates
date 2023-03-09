const locationURL = location.href;

const github = 'github';

/* Info img --------------------------------------------------------------------------------------- */

const conditionURL = locationURL.includes(github)

/* Room img */
const roomImgGithubURL = '../remates/img/room-g4de92321b_1280.jpg'
const roomImgOtherURL = '../img/room-g4de92321b_1280.jpg'

/* Wooden img */
const woodenImgGithubURL = '../remates/img/wooden-bench-g6142c268b_1280.jpg'
const woodenImgOtherURL = '../img/wooden-bench-g6142c268b_1280.jpg'

/* Copper img */
const cooperImgGithubURL = '../remates/img/copper-teapots-gb20fa09e7_1280.jpg'
const cooperImgOtherURL = '../img/copper-teapots-gb20fa09e7_1280.jpg'

/* Chair img */
const chairImgGithubURL = '../remates/img/chair-g0d89a751c_1280.jpg'
const chairImgOtherURL = '../img/chair-g0d89a751c_1280.jpg'

/* -------------------------------------------------------------------------------------------------- */

const productsArray = [
    {
        id: 1,
        name: 'Articulo 1',
        infoImage: {
            img: conditionURL ? roomImgGithubURL : roomImgOtherURL,
            alt: 'Articulo 1'
        },
        href: conditionURL ? '../remates/ar1.html' : '../ar1.html',
        category: ''
    },

    {
        id: 2,
        name: 'Articulo 2',
        image: '../img/wooden-bench-g6142c268b_1280.jpg',
        infoImage: {
            img: conditionURL ? woodenImgGithubURL : woodenImgOtherURL,
            alt: 'Articulo 2'
        },
        href: conditionURL ? '../remates/ar2.html' : '../ar2.html',
        category: ''
    },

    {
        id: 3,
        name: 'Articulo 3',
        infoImage: {
            img: conditionURL ? cooperImgGithubURL : cooperImgOtherURL,
            alt: 'Articulo 3'
        },
        href: conditionURL ? '../remates/ar3.html' : '../ar3.html',
        category: ''
    },

    {
        id: 4,
        name: 'Articulo 4',
        infoImage: {
            img: conditionURL ? chairImgGithubURL : chairImgOtherURL,
            alt: 'Articulo 4'
        },
        href: conditionURL ? '../remates/ar4.html' : '../ar4.html',
        category: ''
    },
    
    {
        id: 1,
        name: 'Articulo 1',
        infoImage: {
            img: conditionURL ? roomImgGithubURL : roomImgOtherURL,
            alt: 'Articulo 1'
        },
        href: conditionURL ? '../remates/ar1.html' : '../ar1.html',
        category: ''
    },

    {
        id: 2,
        name: 'Articulo 2',
        image: '../img/wooden-bench-g6142c268b_1280.jpg',
        infoImage: {
            img: conditionURL ? woodenImgGithubURL : woodenImgOtherURL,
            alt: 'Articulo 2'
        },
        href: conditionURL ? '../remates/ar2.html' : '../ar2.html',
        category: ''
    },

    {
        id: 3,
        name: 'Articulo 3',
        infoImage: {
            img: conditionURL ? cooperImgGithubURL : cooperImgOtherURL,
            alt: 'Articulo 3'
        },
        href: conditionURL ? '../remates/ar3.html' : '../ar3.html',
        category: ''
    },

    {
        id: 4,
        name: 'Articulo 4',
        infoImage: {
            img: conditionURL ? chairImgGithubURL : chairImgOtherURL,
            alt: 'Articulo 4'
        },
        href: conditionURL ? '../remates/ar4.html' : '../ar4.html',
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