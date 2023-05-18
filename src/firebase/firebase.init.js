// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIY75LI6UC2gUt1kMngjYXK8OMIDzRnLE",
    authDomain: "email-password-auth-d6e85.firebaseapp.com",
    projectId: "email-password-auth-d6e85",
    storageBucket: "email-password-auth-d6e85.appspot.com",
    messagingSenderId: "768636850429",
    appId: "1:768636850429:web:058983173b9a7f2cf4ae94",
    measurementId: "G-ECWTDFCR20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;