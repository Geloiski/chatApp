import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAZFpoVtEQ4wetz-3kP7SQixbr6aXasze8",
    authDomain: "smsapp-880bf.firebaseapp.com",
    projectId: "smsapp-880bf",
    storageBucket: "smsapp-880bf.appspot.com",
    messagingSenderId: "419066010625",
    appId: "1:419066010625:web:ddd9f8f132c1ad97183400"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
