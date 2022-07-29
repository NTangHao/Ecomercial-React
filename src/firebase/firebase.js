// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbfJTZJew3IccoMSM-xyvwx4T0iFw4ONE",
    authDomain: "nextjsscocial.firebaseapp.com",
    projectId: "nextjsscocial",
    storageBucket: "nextjsscocial.appspot.com",
    messagingSenderId: "91504907814",
    appId: "1:91504907814:web:33254cd6c36b020eea78e7",
    measurementId: "G-TJRGG4173R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth,app}
