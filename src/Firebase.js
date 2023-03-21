import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD6IxgKBtkcNu8VrXlFPPgSokVYmgvBsZ4",
    authDomain: "unskillwork.firebaseapp.com",
    projectId: "unskillwork",
    storageBucket: "unskillwork.appspot.com",
    messagingSenderId: "469278472573",
    appId: "1:469278472573:web:b575ff7b18a11d93d4f414"
};

firebase.default.initializeApp(firebaseConfig);
const auth=firebase.default.auth();
var database = getDatabase();
export {auth , firebase,database};
