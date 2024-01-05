
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOm7b2vYAoFnVtAnRHVGKC5RhC6ZAj_YE",
    authDomain: "menu-del-oso.firebaseapp.com",
    projectId: "menu-del-oso",
    storageBucket: "menu-del-oso.appspot.com",
    messagingSenderId: "442097883562",
    appId: "1:442097883562:web:802bbd99d496de9494b3d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

