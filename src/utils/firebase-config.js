// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxamEu7dC6LL1EK3LXDFisBVwJ26AxFFo",
  authDomain:"gdsc-64ba1.firebaseapp.com",
  projectId: "gdsc-64ba1",
  storageBucket: "gdsc-64ba1.appspot.com",
  messagingSenderId: "952933981233",
  appId:"1:952933981233:web:b9fc2ab3b38815e801c910",
  measurementId: "G-W3DXQR0KMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)
export default app