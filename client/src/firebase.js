// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-4fb06.firebaseapp.com",
  projectId: "mern-auth-4fb06",
  storageBucket: "mern-auth-4fb06.appspot.com",
  messagingSenderId: "767727854388",
  appId: "1:767727854388:web:d9f693d81149e5f7fbbb61"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);