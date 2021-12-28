// Import the functions you need from the SDKs you need
//  import { initializeApp } from "firebase/app"
import * as firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkelerV8u-wgUa33UlBBc_my7J-0vInUM",
  authDomain: "finotbib.firebaseapp.com",
  projectId: "finotbib",
  storageBucket: "finotbib.appspot.com",
  messagingSenderId: "1051486659384",
  appId: "1:1051486659384:web:0b8a869bd0955321ef97cd"
};

// Initialize Firebase
let app;
if(firebase.app.length===0){
    app= firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}
const auth=firebase.auth();
export {auth};







