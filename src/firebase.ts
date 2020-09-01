import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API,
  appId: process.env.VUE_APP_FIREBASE_APP,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT
});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { db, storage };
