// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2h1RikKHsU3T93dy94Ch6MMgTYX3perU",
  authDomain: "assignment-12-c7c15.firebaseapp.com",
  projectId: "assignment-12-c7c15",
  storageBucket: "assignment-12-c7c15.appspot.com",
  messagingSenderId: "470572463001",
  appId: "1:470572463001:web:0823e5c59a51e0e9c0d908",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
