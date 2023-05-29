import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBP7woUeP2cnUAa_dra0du7EAEXAQU2JhA",
  authDomain: "melasi-stores-d7af4.firebaseapp.com",
  projectId: "melasi-stores-d7af4",
  storageBucket: "melasi-stores-d7af4.appspot.com",
  messagingSenderId: "416114604586",
  appId: "1:416114604586:web:584ce89ee4921abbbb2153"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 