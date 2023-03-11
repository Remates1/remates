const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const hours = today.getHours() + " hrs";
const minutes = today.getMinutes() + " min";
const seconds = today.getSeconds() + " sec";

export const date = `${day}/${month}/${year}`
export const timeDate = `${hours} ${minutes} ${seconds} - ${day}/${month}/${year}`
export const time = `${hours} ${minutes} ${seconds}`

const circle = document.getElementById('circle');
const data = document.getElementById('data');

export const body = document.querySelector('body')

export function reload() {
    setTimeout(function () {
        window.location.reload()
    }, 1000)
}

export function reloadUpdateInfoUser() {
    setTimeout(function () {
        window.location.reload()
    }, 3000)
}

export function closeModalLogin() {
    let modalLogin = document.querySelectorAll('.modal-login')[0]
    let modalContainerLogin = document.querySelectorAll('.modal-container-login')[0]
    modalLogin.classList.toggle("modal-close-login")
    setTimeout(function () {
        modalContainerLogin.style.opacity = "0";
        modalContainerLogin.style.visibility = "hidden";
    }, 500)
}

export function closeModalSignup() {
    let modalContainerSignup = document.querySelectorAll('.modal-container-signup')[0]
    let modalSignup = document.querySelectorAll('.modal-signup')[0]
    modalSignup.classList.toggle("modal-close-signup")
    setTimeout(function () {
        modalContainerSignup.style.opacity = "0";
        modalContainerSignup.style.visibility = "hidden";
    }, 500)
}

export function dataLoaderOn() {
    circle.style.display = 'block';
    data.style.display = 'block';
}

export function dataLoaderOff() {
    circle.style.display = 'none';
    data.style.display = 'none';
}