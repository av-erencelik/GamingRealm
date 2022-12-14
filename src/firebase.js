import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDgv6md3zNddVNuPmGbGdwmOWWdrt4nfFs",
  authDomain: "gaming-site-8ed2f.firebaseapp.com",
  projectId: "gaming-site-8ed2f",
  storageBucket: "gaming-site-8ed2f.appspot.com",
  messagingSenderId: "686407876283",
  appId: "1:686407876283:web:f0f5b9080709babaa6339e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
