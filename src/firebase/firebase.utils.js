import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA_LvTyeJ7_IwFs7OZrv8mi2RGLqYfv5xw',
  authDomain: 'crwn-db-b30b5.firebaseapp.com',
  databaseURL: 'https://crwn-db-b30b5.firebaseio.com',
  projectId: 'crwn-db-b30b5',
  storageBucket: '',
  messagingSenderId: '341294776748',
  appId: '1:341294776748:web:b2d522bc36fa41f565ba09',
};

firebase.initializeApp(config);

// First or create an authenticated user.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // Create the user if it doesn't exist.
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setup Google sign in.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
