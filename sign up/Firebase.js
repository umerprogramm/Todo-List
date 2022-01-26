import { initializeApp } from 'firebase/app'; 
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup 
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDr03g8Vcq118Em5a1K-XfWSU4yNU4FCwg",
  authDomain: "todo-9cfd0.firebaseapp.com",
  projectId: "todo-9cfd0",
  storageBucket: "todo-9cfd0.appspot.com",
  messagingSenderId: "1024981741980",
  appId: "1:1024981741980:web:e50a76abe444795fb95859",
  measurementId: "G-8YSH182TSB"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const Popup = signInWithPopup ;
export { auth, provider, Popup };