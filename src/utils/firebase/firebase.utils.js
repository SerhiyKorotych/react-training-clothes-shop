import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBimee2m-pSxMPMrebUQscwX09NhM_Hsyw",
  authDomain: "crown-clothing-db-ede13.firebaseapp.com",
  projectId: "crown-clothing-db-ede13",
  storageBucket: "crown-clothing-db-ede13.appspot.com",
  messagingSenderId: "72985448646",
  appId: "1:72985448646:web:57e92fd408805d3792c7c7",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
