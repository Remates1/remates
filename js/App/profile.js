import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
import { auth, database, db } from "../App/firebase.js"
import { loginCheck } from '../App/loginCheck.js'
import { collection, getFirestore, addDoc, setDoc, doc, getDocs, getDoc, updateDoc, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
import { reloadUpdateInfoUser } from "../globalVars.js"
import { showMessage } from "../components/showMessage/showMessage.js"

const containerProfile = document.querySelector('.container-profile')

const name = document.querySelector('#name')
const counter_Name = document.querySelector('#counterName')
const inputName = document.querySelector('#inputName')

const age = document.querySelector('#age')
const counter_Age = document.querySelector('#counterAge')
const inputAge = document.querySelector('#inputAge')

const showImg = document.querySelector('#show-img')
const inputImg = document.querySelector('#inputImg')
const btnImg = document.querySelector('.btnImg')

const acceptName = document.querySelector('#acceptName')
const aceeptAge = document.querySelector('#aceeptAge')

const showUsers = document.querySelector('#showUsers')
const userRegister = document.querySelector('#userRegister')

var nameUser;
var ageUser;
var varImg;
var counterNameUser;
var counterAgeUser;
var accountCreationDateUser;

export function userChangeData(userUID) {
    if (containerProfile !== null) {
        onSnapshot(doc(db, "users", userUID), (doc) => {
            clearHTML()

            const userData = doc.data()

            nameUser = userData.name
            ageUser = userData.age
            varImg = userData.accountImg
            counterNameUser = userData.counterName
            counterAgeUser = userData.counterAge
            accountCreationDateUser = userData.accountCreationDate

            showData()
        })
        changeName(userUID)
        changeAge(userUID)
    }
}

/* Clean up HTML */
function clearHTML() {
    showImg.innerHTML = ''
    userRegister.innerHTML = ''
    counter_Name.innerHTML = ''
    counter_Age.innerHTML = ''
}
/* ------------------------------------------------------------------------------------------------------ */

/* Show user data */
function showData() {
    showImg.innerHTML += `
    <img class="imgPro" src="${varImg}">
`
    inputImg.value = varImg

    inputName.value = nameUser
    counter_Name.innerHTML = `Intentos: ${counterNameUser}`

    inputAge.value = ageUser
    counter_Age.innerHTML = `Intentos: ${counterAgeUser}`

    userRegister.innerHTML += `Usuario registrado el ${accountCreationDateUser}`
}
/* ------------------------------------------------------------------------------------------------------ */

/* Change user data */
function changeName(userUID) {
    acceptName?.addEventListener('click', function () {
        if (counterNameUser > 0) {
            if (inputName.value.length >= 2) {
                if (inputName.value !== nameUser) {
                    try {
                        updateDoc(doc(db, 'users', userUID), {
                            name: inputName.value,
                            counterName: counterNameUser - 1
                        })
                        showMessage("Datos actualizados con exito", "success")
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    alert("El nombre es el mismo")
                }
            } else {
                alert("El nombre debe contener 2 o mas caracteres")
            }
        } else {
            alert("Usted no tiene mas intentos")
        }
    })
}

function changeAge(userUID) {
    aceeptAge?.addEventListener('click', function () {
        if (counterAgeUser > 0) {
            if (inputAge.value < 140) {
                if (inputAge.value >= 18) {
                    if (inputAge.value !== ageUser) {
                        try {
                            updateDoc(doc(db, 'users', userUID), {
                                age: inputAge.value,
                                counterAge: counterAgeUser - 1
                            })
                            showMessage("Datos actualizados con exito", "success")
                        } catch (error) {
                            console.log(error)
                        }
                    } else {
                        alert("La edad es la misma")
                    }
                } else {
                    alert("Tienes que ser mayor de edad")
                }
            } else {
                alert("El numero es muy alto")
            }
        } else {
            alert("Usted no tiene mas intentos")
        }
    })
}
/* ------------------------------------------------------------------------------------------------------ */



export function noLogin() {
    if (containerProfile !== null) {
        containerProfile.innerHTML = "Inicie sesion para poder ver el perfil"
    }
}


export function showUserss() {
    if (showUsers !== null) {
        const noAdmin = query(collection(db, "users"), where("counterAge", "<=", 4))
        onSnapshot((noAdmin), (querySnapshot) => {
            showUsers.innerHTML = ''
            querySnapshot.forEach((doc) => {
                const userData = doc.data()
                showUsers.innerHTML += `
                <div class="userI">
                    <img src="${userData.accountImg}">
                    <h1>${userData.name}</h1>
                </div>
                `
            });
        })
    }
}