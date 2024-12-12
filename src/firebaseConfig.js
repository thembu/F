import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import getAuth from firebase/auth

const firebaseConfig = {
  apiKey: 'AIzaSyCQjvrXqXwsId3HdTiBGJLQCt7jiE84xNY',
  authDomain: 'tutoring-solution.firebaseapp.com',
  projectId: 'tutoring-solution',
  storageBucket: 'tutoring-solution.firebasestorage.app',
  messagingSenderId: '34614952574',
  appId: '1:34614952574:web:c85f6832515675ae048e2f',
  measurementId: 'G-3BJBGMPX77',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth using getAuth

export { auth }; // Export auth object for use in other modules
