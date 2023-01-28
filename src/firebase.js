import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwrP4FWlrm9ERoyUHodSJclDdudNDerS8",
  authDomain: "qhacks23.firebaseapp.com",
  projectId: "qhacks23",
  storageBucket: "qhacks23.appspot.com",
  messagingSenderId: "652689325475",
  appId: "1:652689325475:web:e825d8ebf13237eb70ae16",
  measurementId: "G-TTY8390ZQE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
