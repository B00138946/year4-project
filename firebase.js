// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuKBKwHmfWAFLXihF_fMqFxCzeFJTLiRc",
  authDomain: "year4project-b9569.firebaseapp.com",
  projectId: "year4project-b9569",
  storageBucket: "year4project-b9569.appspot.com",
  messagingSenderId: "999645956029",
  appId: "1:999645956029:web:094812bf9f3c2102feb4d4"
};



// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}


const auth = firebase.auth()


export {auth};


