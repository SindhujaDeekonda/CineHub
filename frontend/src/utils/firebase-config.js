// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaqvIPdxF0mPO4RwFf9o-lGhGX9DKYEMs",
  authDomain: "react-netflix-clone-2b499.firebaseapp.com",
  projectId: "react-netflix-clone-2b499",
  storageBucket: "react-netflix-clone-2b499.appspot.com",
  messagingSenderId: "1028178528957",
  appId: "1:1028178528957:web:425ba9d5eb11d3a82585d4",
  measurementId: "G-YRCV4LP6TK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
