import firebase from "firebase/app";
import "firebase/analytics"
import "firebase/database"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyC5wOT7-BpfE6qefKWRKxeeZLMgXPXjzh8",
    authDomain: "fir-login-efbcc.firebaseapp.com",
    databaseURL: "https://fir-login-efbcc-default-rtdb.firebaseio.com",
    projectId: "fir-login-efbcc",
    storageBucket: "fir-login-efbcc.appspot.com",
    messagingSenderId: "951679761149",
    appId: "1:951679761149:web:06fd16cd97053ee6761c94",
    measurementId: "G-C7RD4JFEMR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export const configureFirebase = () => {
    //firebase.initializeApp(firebaseConfig)
}


let databaseRef: null | firebase.database.Database = null;


export const getDatabaseRef = () => {
    if (databaseRef) return databaseRef;

    databaseRef = firebase.database();
    return databaseRef;
}