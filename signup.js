import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js';

import { sendEmailVerification, getAuth, signInWithPopup, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword,  
    onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js';


const firebaseConfig = {
  apiKey: "AIzaSyDHHi3h2G5VY4bCg92QWZOjM6Bl6pco2ro",
  authDomain: "aba2025-8df97.firebaseapp.com",
  projectId: "aba2025-8df97",
  storageBucket: "aba2025-8df97.firebasestorage.app",
  messagingSenderId: "819645801939",
  appId: "1:819645801939:web:2c4f13c8029003c434bb26"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function registerUser() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Registro exitoso
            const user = userCredential.user;
            console.log('Usuario registrado:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error al registrar usuario:', errorCode, errorMessage);
        });
}

