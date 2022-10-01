// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnP-CAMSVAHlKlxzd-YNV2UX8Qb4Z4E1A",
    authDomain: "to-do-app-9b557.firebaseapp.com",
    projectId: "to-do-app-9b557",
    storageBucket: "to-do-app-9b557.appspot.com",
    messagingSenderId: "889710836713",
    appId: "1:889710836713:web:fc9705d83d6c8b4175e978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth