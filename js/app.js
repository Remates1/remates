import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
import { auth, database, db } from "./App/firebase.js"
import { loginCheck } from './App/loginCheck.js'
import { collection, getFirestore, addDoc, setDoc, doc, getDocs, getDoc, updateDoc, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
import { reloadUpdateInfoUser } from "./globalVars.js"
import { showMessage } from "./components/showMessage/showMessage.js"

import './App/signupForm.js'
import './App/signinForm.js'
import './App/logout.js'

const show = document.querySelector('#showUsers')

onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
    if (user) {

        const userUid = user.uid
        /* const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            const dataUser = doc.data()
            //console.log(doc.data());
            show.innerHTML += `
            <div class="userI">
            <img src="${dataUser.accountImg}">
            <h1>${dataUser.name}</h1>
            </div>
            `
        }); */

        /* if (show !== null) {
            show.innerHTML = ''
            const querySnapshot2 = await getDocs(query(collection(db, "users"), where("counterAge", "<=", 4)));
            querySnapshot2.forEach((doc) => {
                const dataUser = doc.data()
                //console.log(dataUser)
                show.innerHTML += `
                <div class="userI">
                <img src="${dataUser.accountImg}">
                <h1>${dataUser.name}</h1>
                </div>
                `
            });
        } */

        if (document.querySelector('.container-profile') !== null) {
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

            let counterName;
            let counterAge;

            const starCountRef = ref(database, 'users/' + userUid);
            onValue(starCountRef, (snapshot) => {
                counter_Name.innerHTML = ''
                counter_Age.innerHTML = ''
                showImg.innerHTML = ''

                const name = snapshot.val().name;
                const img = snapshot.val().accountImg
                const age = snapshot.val().age
                const counterName = snapshot.val().counterName
                const counterAge = snapshot.val().counterAge
                //console.log(name)

                inputName.value = name
                inputAge.value = age
                inputImg.value = img

                counter_Name.innerHTML += `Numero de intentos: ${counterName}`
                counter_Age.innerHTML += `Numero de intentos: ${counterAge}`

                showImg.innerHTML += `
                    <img class="imgPro" src="${img}">
                `

                btnImg?.addEventListener('click', function (e) {
                    try {
                        update(ref(database, 'users/' + userUid), {
                            accountImg: inputImg.value
                        })
                        //showMessage("Datos actualizados con exito!", "success")
                    } catch (error) {
                        showMessage(error.code, "error")
                    }
                })

                if (counterAge !== 0) {
                    aceeptAge?.addEventListener('click', function (e) {
                        try {
                            update(ref(database, 'users/' + userUid), {
                                age: inputAge.value,
                                counterAge: counterAge - 1
                            })
                            //showMessage("Datos actualizados con exito!", "success")
                        } catch (error) {
                            showMessage(error.code, "error")
                        }
                    })
                } else {
                    counter_Age.innerHTML += ` (Se acabo)`
                }

                if (counterName !== 0) {
                    acceptName?.addEventListener('click', function (e) {
                        try {
                            update(ref(database, 'users/' + userUid), {
                                name: inputName.value,
                                counterName: counterName - 1
                            })
                            //showMessage("Datos actualizados con exito!", "success")
                        } catch (error) {
                            showMessage(error.code, "error")
                        }
                    })
                } else {
                    counter_Name.innerHTML += ` (Se acabo)`
                }

            });

        }

    } else {
        if (document.querySelector('.container-profile') !== null) {
            document.querySelector('.container-profile').innerHTML = "Intene iniciar sesion"
        }
    }
    if (show !== null) {
        const users = ref(database, "users/");
        onValue(users, (snapshot) => {
            show.innerHTML = ''
            snapshot.forEach(function (childSnapshot) {
                var name = childSnapshot.val().name
                var img = childSnapshot.val().accountImg
                var counterAge = childSnapshot.val().counterAge
                if (counterAge <= 4) {
                    show.innerHTML += `
                    <div class="userI">
                        <img src="${img}">
                        <h1>${name}</h1>
                    </div>
                    `
                }
            })
        })
    }
})

