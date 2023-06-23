// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDyl0xdKMVwpcyHvQ81sjkr_FCbHM2qmv0",
    authDomain: "frontend-task-a229a.firebaseapp.com",
    projectId: "frontend-task-a229a",
    storageBucket: "frontend-task-a229a.appspot.com",
    messagingSenderId: "1085818610349",
    appId: "1:1085818610349:web:caf8b05f17a51e2368dc24",
    measurementId: "G-X49V8G9EGV"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
