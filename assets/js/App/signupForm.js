import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { showMessage } from "../../components/showMessage/js/showMessage.js"
import { set, ref } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
import { auth, database, db } from "./firebase.js"
import { closeModalSignup, date, timeDate } from "../globalVars.js"
import { collection, getFirestore, addDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const name = signupForm['signup-name'].value
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        closeModalSignup()

        signupForm.reset()

        showMessage("Bienvenido " + /* userCredential.user.email */ name, "success")

        await setDoc(doc(db, "users", user.uid), {
            email: email,
            // password: password,
            name: name,
            age: '',
            accountImg: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665282759496710~c5_720x720.jpeg',
            counterName: 4,
            counterAge: 4,
            accountCreationDate: date,
            accountCreationTimeDate: timeDate,
        });


    } catch (error) {
        console.log(error.message)
        console.log(error.code)

        switch (error.code) {
            case 'auth/email-already-in-use':
                showMessage("El usuario ya existe", "error")
                break;
            case 'auth/invalid-email':
                showMessage("Email invalido", "error")
                break;
            case 'auth/weak-password':
                showMessage("Contraseña debil", "error")
                break;
            default:
                showMessage("Algo anda mal", "error")
                break;
        }
    }
})