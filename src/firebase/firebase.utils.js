import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA6fxZdAxkboVpxblxlm8q5LWnQNLJ2kqY",
  authDomain: "crwn-db-65788.firebaseapp.com",
  projectId: "crwn-db-65788",
  storageBucket: "crwn-db-65788.appspot.com",
  messagingSenderId: "904090656983",
  appId: "1:904090656983:web:5143d9b17a7a7cece49092",
  measurementId: "G-Z298GEWEZB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
