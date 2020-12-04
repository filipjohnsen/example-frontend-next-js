import firebase from 'firebase/app'
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBW15RYlWLR_hoP1b08j7KeD-v2k8OD3BY",
    authDomain: "lwim-lead-managment.firebaseapp.com",
    projectId: "lwim-lead-managment",
    storageBucket: "lwim-lead-managment.appspot.com",
    messagingSenderId: "87881541805",
    appId: "1:87881541805:web:4b25ca34c36b97ec97be24",
    measurementId: "G-HSNWP9SSLC"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()