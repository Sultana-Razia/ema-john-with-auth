// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSjUjwEo3T0XuUpgVfZhrvx_vEGpVBVZE",
    authDomain: "ema-john-with-auth-7a509.firebaseapp.com",
    projectId: "ema-john-with-auth-7a509",
    storageBucket: "ema-john-with-auth-7a509.appspot.com",
    messagingSenderId: "233432561597",
    appId: "1:233432561597:web:554408013a24ee8f5f84d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;