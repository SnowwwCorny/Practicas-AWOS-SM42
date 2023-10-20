import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyApuB6AOi4jK06zUYJ5gOqn8W-FAUgnxfQ",
  authDomain: "prueba-ac3d4.firebaseapp.com",
  projectId: "prueba-ac3d4",
  storageBucket: "prueba-ac3d4.appspot.com",
  messagingSenderId: "257752326866",
  appId: "1:257752326866:web:20ce78bb196cca62f0c30b",
};

const app = initializeApp(firebaseConfig);
export const dbFirebase=getFirestore(app);