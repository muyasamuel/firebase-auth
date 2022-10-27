import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBNADqC7iR2uAnCRuMax7CtxZZOAwTe9JI",
    authDomain: "auth-practise-a8653.firebaseapp.com",
    projectId: "auth-practise-a8653",
    storageBucket: "auth-practise-a8653.appspot.com",
    messagingSenderId: "244586276454",
    appId: "1:244586276454:web:fb185aa200df9ff300afa7"
  };

  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth(app);