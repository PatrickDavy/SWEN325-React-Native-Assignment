import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCwDVmYTYCsxT0n-sVi6R3PQg-UOrMdiLU",
    authDomain: "webstore-34e63.firebaseapp.com",
    databaseURL: "https://webstore-34e63.firebaseio.com",
    projectId: "webstore-34e63",
    storageBucket: "webstore-34e63.appspot.com",
    messagingSenderId: "371309068401",
    appId: "1:371309068401:web:a6c53e326abefb50"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
