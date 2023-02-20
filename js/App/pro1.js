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

export function valueOn(userUID) {
    if (containerValue !== null) {

        onSnapshotA()

        onSnapshotUser(userUID)

        changeValue(userUID)

        onSnapshotValue(userUID)

    }
}

function onSnapshotA() {

    onSnapshot(doc(db, "pro1/" + "numeroMayor"), (doc) => {
        const userData = doc.data()
        num.innerHTML = ''
        valueUserAlto = userData.valueUserAlto
        valueNameUser2 = userData.valueNameUser
        console.log("Mayor", valueUserAlto)
        num.innerHTML += `Numero mayor: ${valueUserAlto} - ${valueNameUser2}`
    })
}

function onSnapshotUser(userUID) {
    onSnapshot(doc(db, "users", userUID), (doc) => {
        const userData = doc.data()
        valueNameUserU = userData.name
    })
}

function changeValue(userUID) {
    btnValue?.addEventListener('click', () => {
        //console.log(inputValue.value)
        //if (inputValue.value > valueUserAlto) {
        setDoc(doc(db, "pro1/", userUID), {
            valueUser: inputValue.value,
            valueNameUser: valueNameUserU,
            accountCreationDate: date,
            accountCreationTimeDate: timeDate,
        });

            setDoc(doc(db, "pro1/" + "numeroMayor"), {
                valueUserAlto: inputValue.value,
                valueNameUser: valueNameUserU
            });
        //} else {
        //    alert("El numero tiene que se mayor")
        //}

    })
}

function onSnapshotValue(userUID) {

    /* const querySnapshot = getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    }); */
    const noAdmin = query(collection(db, "pro1"), where("accountCreationDate", "!=", null))
    onSnapshot((noAdmin), (querySnapshot) => {
        resultsValue.innerHTML = ''
        querySnapshot.forEach((doc) => {
            const valuerData = doc.data()
            valueUserU = valuerData.valueUser
            var valueUserName = valuerData.valueNameUser

            resultsValue.innerHTML += `
            <p style="text-align: center;">${valueUserU} - ${valueUserName}</p>
            
        `
            //console.log(valueUserName)

        });
    })


}
