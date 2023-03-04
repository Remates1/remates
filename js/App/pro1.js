import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
import { auth, database, db } from "../App/firebase.js"
import { loginCheck } from '../App/loginCheck.js'
import { collection, getFirestore, addDoc, setDoc, doc, getDocs, getDoc, updateDoc, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
import { dataLoaderOff, dataLoaderOn, reloadUpdateInfoUser, time } from "../globalVars.js"
import { showMessage } from "../components/showMessage/showMessage.js"
import { closeModalSignup, date, timeDate } from "../globalVars.js"

const inputValue = document.querySelector('#inputNumber')
const btnValue = document.querySelector('#btnNumber')
const resultsValue = document.querySelector('#results')
const containerValue = document.querySelector('#containerValue')
const num = document.querySelector('#num')

var valueUserU;
var valueNameUserU;
var valueImgUserU
var valueAgeUserU
var valueUserAlto;
var valueNameUser2;
var minimo

export function valueOn(userUID) {
    if (containerValue !== null) {
        onSnapshot(doc(db, "users", userUID), (doc) => {
            const userData = doc.data()
            valueNameUserU = userData.name
            valueImgUserU = userData.accountImg
            valueAgeUserU = userData.age
        })

        onSnapshot(doc(db, "pro1/" + "minimo"), (doc) => {
            const userData = doc.data()
            minimo = userData.minimo
            //console.log(minimo)
        })

        btnValue?.addEventListener('click', () => {
            //console.log(inputValue.value)
            if (valueAgeUserU !== '') {
                if (inputValue.value !== '') {
                    if (inputValue.value > minimo || minimo == undefined) {
                        if (inputValue.value - minimo > 200 || minimo == undefined) {
                            setDoc(doc(db, "pro1/", userUID), {
                                valueUser: parseInt(inputValue.value),
                                valueNameUser: valueNameUserU,
                                valueImgUser: valueImgUserU,
                                valueCreationDate: date,
                                valueCreationTime: time,
                            });
                            setDoc(doc(db, "pro1/" + "minimo"), {
                                minimo: parseInt(inputValue.value)
                            });
                            inputValue.value = ''
                        } else {
                            let dif = inputValue.value - minimo
                            alert("La diferencia tiene que ser mayor a 200. \nDiferencia: " + dif)
                        }
                    } else {
                        alert("El numero tiene que se mayor $" + minimo)
                    }
                } else {
                    alert("El campo no puede estar vacio")
                }
            } else {
                alert("Edad no definida")
            }
        })



    }
}

export function noUserValue() {
    const noShowValueUser = document.querySelector('#noShowValueUser')
    if (noShowValueUser !== null) {
        noShowValueUser.innerHTML = 'Inicie sesion para poder ingresar'
    }
}


export function showUserValue() {
    const tr = document.querySelector('#tr')
    if (tr !== null) {
        dataLoaderOn()
        const noAdmin = query(collection(db, "pro1"), where("valueUser", "!=", null), orderBy("valueUser", "desc"))
        onSnapshot((noAdmin), (querySnapshot) => {
            dataLoaderOff()
            tr.innerHTML = ''
            querySnapshot.forEach((doc) => {
                const valuerData = doc.data()
                valueUserU = valuerData.valueUser
                var valueUserName = valuerData.valueNameUser
                var valueUserImg = valuerData.valueImgUser
                var valueCreationDate = valuerData.valueCreationDate
                var valueCreationTime = valuerData.valueCreationTime
                tr.innerHTML += `
                    <tr>
                        <!-- <td data-title="Img">
                            <img width="40px" src="${valueUserImg}" style="border-radius: 50%; height: 40px; object-fit: cover;">
                        </td> -->
                        <td data-title="Nombre" >
                            <p>${valueUserName}</p>
                        </td>
                        <td data-title="Total">$${valueUserU}</td>
                        <!-- <td>${valueCreationTime}</td> -->
                        <td data-title="Fecha">${valueCreationDate}</td>
                    </tr>
                `
            });
        })
    }
}

function timeH(month, day) {
    if (document.querySelector('.countdown') !== null) {
        month -= 1
        const nextYear = (new Date()).getFullYear() + 0
        const nextYearDate = new Date(nextYear, month, day)

        const time = setInterval(() => {
            const todayDate = new Date()
            const secDiff = Math.floor((nextYearDate.getTime() - todayDate.getTime()) / 1000)
            const days = Math.floor((secDiff / (60 * 60)) / 24) // 0
            const hours = Math.floor(secDiff / (60 * 60)) % 24 // 0
            const minutes = Math.floor(secDiff / 60) % 60 // 0
            const seconds = Math.floor(secDiff) % 60 // 0

            const daysDigits = days.toString().length
            const hoursDigits = hours.toString().length
            const minutesDigits = minutes.toString().length
            const secondsDigits = seconds.toString().length

            if (daysDigits == 1) {
                dayElement.innerText = `0${days}`
            } else {
                dayElement.innerText = days
            }

            if (hoursDigits == 1) {
                hourElement.innerText = `0${hours}`
            } else {
                hourElement.innerText = hours
            }

            if (minutesDigits == 1) {
                minElement.innerText = `0${minutes}`
            } else {
                minElement.innerText = minutes
            }

            if (secondsDigits == 1) {
                secElement.innerText = `0${seconds}`
            } else {
                secElement.innerText = seconds
            }

            if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
                noShowValueUser.innerHTML = 'Se termino el tiempo'
                clearInterval(time)
            }
        })
    }
}
timeH(3, 28)
