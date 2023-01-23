import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVv3QOzsxj_3OhcmBd0hNH2DdLt2I8-JI",
  authDomain: "ics4u-7d97d.firebaseapp.com",
  projectId: "ics4u-7d97d",
  storageBucket: "ics4u-7d97d.appspot.com",
  messagingSenderId: "690900457077",
  appId: "1:690900457077:web:8f39d29507e308613eca3c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();

export { auth, firestore }