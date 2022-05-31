import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvXohqaYD9zoYYWymIc7EeJrcfNmd0oAE",
  authDomain: "miniblog-eba12.firebaseapp.com",
  projectId: "miniblog-eba12",
  storageBucket: "miniblog-eba12.appspot.com",
  messagingSenderId: "278107030665",
  appId: "1:278107030665:web:e11937e4160626270ab258",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
