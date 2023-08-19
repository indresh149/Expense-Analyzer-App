import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBdFaXL4Cl8EMJR2tgYgy1do2Fxkvbnnug",
    authDomain: "expensetracker-1668a.firebaseapp.com",
    databaseURL: "https://expensetracker-1668a-default-rtdb.firebaseio.com",
    projectId: "expensetracker-1668a",
    storageBucket: "expensetracker-1668a.appspot.com",
    messagingSenderId: "736865415128",
    appId: "1:736865415128:web:8a2bf2a52f5ee039758cad",
    measurementId: "G-KD7382GHXF"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };