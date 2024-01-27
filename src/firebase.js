// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlzBDrE-LE6uOFjI7wvMgSR9_uWTmL0Zk",
  authDomain: "react-chatapp-23bab.firebaseapp.com",
  projectId: "react-chatapp-23bab",
  storageBucket: "react-chatapp-23bab.appspot.com",
  messagingSenderId: "280027243223",
  appId: "1:280027243223:web:3016119121a1620a96c692"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);