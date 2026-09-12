import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDavOiEqFlp4S-EqGN-rq_aZMrqGrHfDVA",
  authDomain: "my-portfolio-9f0bd.firebaseapp.com",
  projectId: "my-portfolio-9f0bd",
  storageBucket: "my-portfolio-9f0bd.firebasestorage.app",
  messagingSenderId: "816039677482",
  appId: "1:816039677482:web:5d9e7aee0f5c99bf9bfd53"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);