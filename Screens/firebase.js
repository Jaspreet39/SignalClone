import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAuUjs2JDUOUrbe45nkB50VoYWdfxgvJ9A",
    authDomain: "signal-clone-282a0.firebaseapp.com",
    projectId: "signal-clone-282a0",
    storageBucket: "signal-clone-282a0.appspot.com",
    messagingSenderId: "860145825097",
    appId: "1:860145825097:web:53f1caf17879f1142a1698"
};


let app;

if(firebase.apps.length === 0){
   app  = firebase.initializeApp(firebaseConfig);
} else{
    app= firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth}; 
