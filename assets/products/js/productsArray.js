const locationURL = location.href;

const github = 'github';

/* Info img --------------------------------------------------------------------------------------- */

const conditionURL = locationURL.includes(github)

/* Room img */
const roomImgGithubURL = '../remates/assets/products/img/room-g4de92321b_1280.jpg'
const roomImgOtherURL = '../../../assets/products/img/room-g4de92321b_1280.jpg' //../img/room-g4de92321b_1280.jpg

/* Wooden img */
const woodenImgGithubURL = '../remates/assets/products/img/wooden-bench-g6142c268b_1280.jpg'
const woodenImgOtherURL = '../../../assets/products/img/wooden-bench-g6142c268b_1280.jpg'

/* Copper img */
const cooperImgGithubURL = '../remates/assets/products/img/copper-teapots-gb20fa09e7_1280.jpg'
const cooperImgOtherURL = '../../../assets/products/img/copper-teapots-gb20fa09e7_1280.jpg'

/* Chair img */
const chairImgGithubURL = '../remates/assets/products/img/chair-g0d89a751c_1280.jpg'
const chairImgOtherURL = '../../../assets/products/img/chair-g0d89a751c_1280.jpg'

/* -------------------------------------------------------------------------------------------------- */

export const productsArray = [
    {
        id: 1,
        name: 'Articulo 1',
        infoImage: {
            img: conditionURL ? roomImgGithubURL : roomImgOtherURL,
            alt: 'Articulo 1'
        },
        href: conditionURL ? 'remates/assets/products/ar1.html' : '../../../assets/products/ar1.html',
        category: ['anime', 'accion']
    },

    {
        id: 2,
        name: 'Articulo 2',
        image: '../img/wooden-bench-g6142c268b_1280.jpg',
        infoImage: {
            img: conditionURL ? woodenImgGithubURL : woodenImgOtherURL,
            alt: 'Articulo 2'
        },
        href: conditionURL ? '../assets/products/remates/ar2.html' : '../../../assets/products/ar2.html',
        category: ['comedia']
    },

    {
        id: 3,
        name: 'Articulo 3',
        infoImage: {
            img: conditionURL ? cooperImgGithubURL : cooperImgOtherURL,
            alt: 'Articulo 3'
        },
        href: conditionURL ? '../assets/products/remates/ar3.html' : '../../../assets/products/ar3.html',
        category: ['anime']
    },

    {
        id: 4,
        name: 'Articulo 4',
        infoImage: {
            img: conditionURL ? chairImgGithubURL : chairImgOtherURL,
            alt: 'Articulo 4'
        },
        href: conditionURL ? '../assets/products/remates/ar4.html' : '../../../assets/products/ar4.html',
        category: ['']
    },

    {
        id: 1,
        name: 'Articulo 1',
        infoImage: {
            img: conditionURL ? roomImgGithubURL : roomImgOtherURL,
            alt: 'Articulo 1'
        },
        href: conditionURL ? '../assets/products/remates/ar1.html' : '../../../assets/products/ar1.html',
        category: ['']
    },

    {
        id: 2,
        name: 'Articulo 2',
        image: '../img/wooden-bench-g6142c268b_1280.jpg',
        infoImage: {
            img: conditionURL ? woodenImgGithubURL : woodenImgOtherURL,
            alt: 'Articulo 2'
        },
        href: conditionURL ? '../assets/products/remates/ar2.html' : '../../../assets/products/ar2.html',
        category: ['']
    },

    {
        id: 3,
        name: 'Articulo 3',
        infoImage: {
            img: conditionURL ? cooperImgGithubURL : cooperImgOtherURL,
            alt: 'Articulo 3'
        },
        href: conditionURL ? '../assets/products/remates/ar3.html' : '../../../assets/products/ar3.html',
        category: ['']
    },

    {
        id: 4,
        name: 'Articulo 4',
        infoImage: {
            img: conditionURL ? chairImgGithubURL : chairImgOtherURL,
            alt: 'Articulo 4'
        },
        href: conditionURL ? '../assets/products/remates/ar4.html' : '../../../assets/products/ar4.html',
        category: ['']
    },

]

/* const peliculas = [
    { name: 'Naruto', category: ['anime'] },
    { name: 'Batman', category: ['accion', 'superheroes'] },
]

const show = document.querySelector('#show')
const btnFil = document.querySelector('#btnFil')
const btnFilBat = document.querySelector('#btnFilBat')
const btnFilReset = document.querySelector('#btnFilReset')

function innerShow(data) {
    show.innerHTML += `
        <div class="sd">
            <h1>${data.name}</h1>
        </div>
    `
}

function showProductsArray() {
    peliculas.forEach((data) => {
        innerShow(data)
    })
    
}

showProductsArray()


btnFil.addEventListener('click', () => {
    const filtrar = peliculas.filter(data => data.category.includes('anime'))
    show.innerHTML = ''
    filtrar.forEach((data) => {
        innerShow(data)
    })

    console.log(filtrar)
})

btnFilBat.addEventListener('click', () => {
    const filtrar = peliculas.filter(data => data.category.includes('superheroes'))
    show.innerHTML = ''
    filtrar.forEach((data) => {
        innerShow(data)
    })

    console.log(filtrar)
})


btnFilReset.addEventListener('click', () => {
    show.innerHTML = ''
    showProductsArray()
}) */
