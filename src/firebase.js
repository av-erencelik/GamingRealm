import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
