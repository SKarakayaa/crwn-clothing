import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyB17UcqA_kQn5P9lM0zTWwUbzIG4_mGMdg",
  authDomain: "crwn-db-f47b0.firebaseapp.com",
  projectId: "crwn-db-f47b0",
  storageBucket: "crwn-db-f47b0.appspot.com",
  messagingSenderId: "470993637323",
  appId: "1:470993637323:web:4c95c9d80c09930f6bf04e",
  measurementId: "G-JFL2KHETX2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
