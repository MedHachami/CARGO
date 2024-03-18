import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import config from "../config/index.mjs";


const firebaseApp = initializeApp(config.firebaseConfig);
const auth = getAuth(firebaseApp);


const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };


