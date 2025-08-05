import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDA8LVcBB6ZuFMGtZZLEh_veJ44WGrNRdE",
    authDomain: "ubipro-houses-lister-fb1d0.firebaseapp.com",
    projectId: "ubipro-houses-lister-fb1d0",
    storageBucket: "ubipro-houses-lister-fb1d0.appspot.com",
    messagingSenderId: "832068369979",
    appId: "1:832068369979:web:dce177da9bfc60a4b4e61e",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
