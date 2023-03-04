import { body } from "../../globalVars.js"

/* Modal Login */
const signInForm = document.querySelector('#login-form')
let closeModalLogin = document.querySelectorAll('.close-login')[0]
let openModalLogin = document.querySelectorAll('.open-login')[0]
let modalLogin = document.querySelectorAll('.modal-login')[0]
let modalContainerLogin = document.querySelectorAll('.modal-container-login')[0]

openModalLogin.addEventListener('click', function (e) {
    e.preventDefault();
    modalContainerLogin.style.opacity = "1";
    modalContainerLogin.style.visibility = "visible";
    modalLogin.classList.toggle("modal-close-login")
})

closeModalLogin.addEventListener('click', function () {
    modalLogin.classList.toggle("modal-close-login")
    setTimeout(function () {
        modalContainerLogin.style.opacity = "0";
        modalContainerLogin.style.visibility = "hidden";
    }, 500)
    signInForm.reset()
})

window.addEventListener('click', function (e) {
    if (e.target == modalContainerLogin) {
        modalLogin.classList.toggle("modal-close-login")
        setTimeout(function () {
            modalContainerLogin.style.opacity = "0";
            modalContainerLogin.style.visibility = "hidden";
        }, 500)
        signInForm.reset()
    }
})
/* ---------------------------------------------------------------------------------------- */

/* Modal Signup */
const signupForm = document.querySelector('#signup-form')
let closeModalSignup = document.querySelectorAll('.close-signup')[0]
let openModalSignup = document.querySelectorAll('.open-signup')[0]
let modalSignup = document.querySelectorAll('.modal-signup')[0]
let modalContainerSignup = document.querySelectorAll('.modal-container-signup')[0]

openModalSignup.addEventListener('click', function (e) {
    e.preventDefault();
    modalContainerSignup.style.opacity = "1";
    modalContainerSignup.style.visibility = "visible";
    modalSignup.classList.toggle("modal-close-signup")
})

closeModalSignup.addEventListener('click', function () {
    modalSignup.classList.toggle("modal-close-signup")
    setTimeout(function () {
        modalContainerSignup.style.opacity = "0";
        modalContainerSignup.style.visibility = "hidden";
    }, 500)
    signupForm.reset()
})

window.addEventListener('click', function (e) {
    if (e.target == modalContainerSignup) {
        modalSignup.classList.toggle("modal-close-signup")
        setTimeout(function () {
            modalContainerSignup.style.opacity = "0";
            modalContainerSignup.style.visibility = "hidden";
        }, 500)
        signupForm.reset()
    }
})
/* ---------------------------------------------------------------------------------------- */
