import dotenv, { config } from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  firebaseConfig: {
    apiKey: process.env.FIREBASE_ApiKey,
    authDomain: process.env.FIREBASE_AuthDomain,
    projectId: process.env.FIREBASE_ProjectId,
    storageBucket: process.env.FIREBASE_StorageBucket,
    messagingSenderId: process.env.FIREBASE_MessagingSenderId,
    appId: process.env.FIREBASE_AppId,
    measurementId: process.env.FIREBASE_MeasurementId
  }
};