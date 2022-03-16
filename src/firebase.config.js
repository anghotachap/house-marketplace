import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxrckb2D_1oYqf3R4Ocfu5bCSPZHUNr58",
  authDomain: "house-marketplace-app-beb53.firebaseapp.com",
  projectId: "house-marketplace-app-beb53",
  storageBucket: "house-marketplace-app-beb53.appspot.com",
  messagingSenderId: "253490220533",
  appId: "1:253490220533:web:5f24aaeeec3e202e4ae4bc",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
