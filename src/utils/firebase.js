// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0bDIkaiQwIQjvB4qWmHI275rsiqKXWuU',
  authDomain: 'stitch-story.firebaseapp.com',
  projectId: 'stitch-story',
  storageBucket: 'stitch-story.appspot.com',
  messagingSenderId: '528282301455',
  appId: '1:528282301455:web:e4e19b62c90cd6651e9f7a',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const functions = require('firebase/functions');



