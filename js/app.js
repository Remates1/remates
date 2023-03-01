import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { ref, onValue, update, set, push, child } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
import { auth, database, db } from "./App/firebase.js"
import { loginCheck } from './App/loginCheck.js'
import { collection, getFirestore, addDoc, setDoc, doc, getDocs, getDoc, updateDoc, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
import { reloadUpdateInfoUser } from "./globalVars.js"
import { showMessage } from "./components/showMessage/showMessage.js"
import { noLogin, showUserss, userChangeData } from "./App/profile.js"
import { closeModalSignup, date, timeDate } from "./globalVars.js"
import { noUserValue, showUserValue, valueOn } from "./App/pro1.js"

import './App/signupForm.js'
import './App/signinForm.js'
import './App/logout.js'



onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
    if (user) {
        const userUID = user.uid

        userChangeData(userUID)

        valueOn(userUID)

    } else {
        noUserValue()
        noLogin()
    }
    showUserValue()
    showUserss()

})

