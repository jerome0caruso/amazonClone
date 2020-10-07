import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBW7AeXM_VkNVd6OCpaAJICj3t5YOz50jQ",
    authDomain: "clone-20d86.firebaseapp.com",
    databaseURL: "https://clone-20d86.firebaseio.com",
    projectId: "clone-20d86",
    storageBucket: "clone-20d86.appspot.com",
    messagingSenderId: "273341166867",
    appId: "1:273341166867:web:6bb54a514b24a746f956e6",
    measurementId: "G-18DFFN625J"
};

//init firebase with - initializeApp()
const firebaseapp = firebase.initializeApp(firebaseConfig);

//real time database in firebase with - firestore()
const database = firebaseapp.firestore();
//handles signing in with - auth()
const auth = firebase.auth();

export { database, auth };

