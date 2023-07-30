// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBeQ9rj_Cv4VEooj_76_SpbZmsIp9vo5s",
  authDomain: "groupchatapp-38291.firebaseapp.com",
  projectId: "groupchatapp-38291",
  storageBucket: "groupchatapp-38291.appspot.com",
  messagingSenderId: "1057070312674",
  appId: "1:1057070312674:web:1a1627d06d1b6d997fc2bb",
  measurementId: "G-LPBN52Z2Q1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
