import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
import { auth, database, db } from "../App/firebase.js"
import { loginCheck } from '../App/loginCheck.js'
import { collection, getFirestore, addDoc, setDoc, doc, getDocs, getDoc, updateDoc, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
import { reloadUpdateInfoUser } from "../globalVars.js"
import { showMessage } from "../components/showMessage/showMessage.js"
import { closeModalSignup, date, timeDate } from "../globalVars.js"

const inputValue = document.querySelector('#inputNumber')
const btnValue = document.querySelector('#btnNumber')
const resultsValue = document.querySelector('#results')
const containerValue = document.querySelector('#containerValue')
const num = document.querySelector('#num')

var valueUserU;
var valueNameUserU;
var valueUserAlto;
var valueNameUser2;
var minimo

export function valueOn(userUID) {
    if (containerValue !== null) {


        onSnapshotUser(userUID)

        changeValue(userUID)

        onSnapshotValue(userUID)

    }
}

function onSnapshotUser(userUID) {
    onSnapshot(doc(db, "users", userUID), (doc) => {
        const userData = doc.data()
        valueNameUserU = userData.name
    })
}

onSnapshot(doc(db, "pro1/" + "minimo"), (doc) => {
    const userData = doc.data()
    minimo = userData.minimo
    console.log(minimo)
})


function changeValue(userUID) {
    btnValue?.addEventListener('click', () => {
        //console.log(inputValue.value)
        if (inputValue.value > minimo) {
            if (inputValue.value - minimo > 200) {
                setDoc(doc(db, "pro1/", userUID), {
                    valueUser: parseInt(inputValue.value),
                    valueNameUser: valueNameUserU,
                    accountCreationDate: date,
                    accountCreationTimeDate: timeDate,
                });
                setDoc(doc(db, "pro1/" + "minimo"), {
                    minimo: parseInt(inputValue.value)
                });
            } else {
                let dif = inputValue.value - minimo
                alert("La diferencia tiene que ser mayor a 200. \nDiferencia: " + dif)
            }
        } else {
            alert("El numero tiene que se mayor")
        }


    })
}

function onSnapshotValue(userUID) {

    /* const querySnapshot = getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    }); */
    const noAdmin = query(collection(db, "pro1"), where("valueUser", "!=", null), orderBy("valueUser", "desc"))
    onSnapshot((noAdmin), (querySnapshot) => {
        resultsValue.innerHTML = ''
        querySnapshot.forEach((doc) => {
            const valuerData = doc.data()
            valueUserU = valuerData.valueUser
            var valueUserName = valuerData.valueNameUser

            resultsValue.innerHTML += `
            <p>$${valueUserU} - ${valueUserName}</p>
            
            `
            console.log(valueUserName)
            console.log(valueUserU)

        });
    })


}
