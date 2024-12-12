// firebaseFunctions.js
import { auth } from './firebaseConfig';
// Import auth from firebase.js
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Named import

import { signInWithEmailAndPassword } from 'firebase/auth';

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Returning the user object after successful sign-up
  } catch (error) {
    throw new Error(error.message); // Handle errors (e.g., weak password, already in use)
  }
};


export const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth,email, password);
      const user = userCredential.user;

      console.log('User logged in:', user);
      return user;
    } catch (error) {
      console.error('Error during login:', error.message);
      throw new Error(error.message);
    }
  };
  
 