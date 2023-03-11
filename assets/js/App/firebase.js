// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js"
import { collection, getFirestore, addDoc, updateDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTlTaezQ9l8p01vGcX4xylRjVsgro199c",
    authDomain: "fir-app-5631b.firebaseapp.com",
    projectId: "fir-app-5631b",
    databseURL: "https://fir-app-5631b-default-rtdb.firebaseio.com/",
    storageBucket: "fir-app-5631b.appspot.com",
    messagingSenderId: "187929853665",
    appId: "1:187929853665:web:28b4205780f49f540e01a0",
    measurementId: "G-FMTZC1SKH7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const database = getDatabase(app);
export const db = getFirestore()

