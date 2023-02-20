import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { showMessage } from "../components/showMessage/showMessage.js"
import { auth, db } from "./firebase.js"
import { collection, getFirestore, addDoc, setDoc, doc, getDocs, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
import { closeModalLogin } from "../globalVars.js"

const signInForm = document.querySelector('#login-form')

signInForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signInForm['login-email'].value
    const password = signInForm['login-password'].value


    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)

        closeModalLogin()

        signInForm.reset()

        var nameUser

        onSnapshot(doc(db, "users", user.uid), (doc) => {
            const userData = doc.data()
            nameUser = userData.name
        })

        showMessage("Bienvenido " + nameUser, "success")


    } catch (error) {
        console.log(error.message)
        console.log(error.code)

        switch (error.code) {
            case 'auth/wrong-password':
                showMessage("Contraseña incorrecta", "error")
                break;
            case 'auth/user-not-found':
                showMessage("El usuario no existe", "error")
                break;
            default:
                showMessage("Algo anda mal", "error")
                break;
        }
    }
})