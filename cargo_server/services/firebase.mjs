// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"; // Import specific functions instead of importing the whole module
// // import { GoogleAuthProvider } from "firebase/auth"; // Import specific functions instead of importing the whole module
// import config from "../config/index.mjs";

// const { initializeApp: initializeFirebaseApp } = require('firebase/app/dist/index.cjs.js');
// const { getAuth: getFirebaseAuth } = require('firebase/auth/dist/index.cjs.js');
// const { GoogleAuthProvider } = require('firebase/auth/dist/index.cjs.js');

// const firebaseApp = initializeFirebaseApp(config.firebaseConfig);
// const auth = getFirebaseAuth(firebaseApp);

// const googleProvider = new GoogleAuthProvider();
// export { auth, googleProvider };

import firebase from "@firebase/app";
import "@firebase/auth";
import config from "../config/index.mjs";

const app = firebase.default.initializeApp(config.firebaseConfig);


export const auth = app.auth();
export default app;

