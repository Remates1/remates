import { signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "../components/showMessage/showMessage.js"
import { reload } from "../globalVars.js"

const logout = document.querySelector('#logout')

logout?.addEventListener('click', async () => {
    //reload()
    //showMessage("Sesion cerrada con exito ", "success")
    await signOut(auth)
})