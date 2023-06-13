import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA5Lf2zaow7H2-2R_dEPZ3N79KwkyqHilE",
    authDomain: "sport-news-web.firebaseapp.com",
    projectId: "sport-news-web",
    storageBucket: "sport-news-web.appspot.com",
    messagingSenderId: "552886859513",
    appId: "1:552886859513:web:135184ca7f5ea1189ad428",
    measurementId: "G-S737W3CCK8",
    databaseURL: "https://sport-news-web-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);