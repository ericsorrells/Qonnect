import { auth, firebase } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) => {
  return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => auth.createUserWithEmailAndPassword(email, password))
}

// Sign In
export const doSignInWithEmailAndPassword = (email, password) => {
  return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => auth.signInWithEmailAndPassword(email, password))
}

// Sign out
export const doSignOut = () =>
  auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);

// Get Current User
export const getCurrentUser = () => {
  let currentUser = auth.currentUser;
  if(!currentUser) {
    currentUser = JSON.parse(sessionStorage.getItem('qProfile'))
  }
  return currentUser;
}

export const isCurrentUser = (uid) => {
  let currentUser;
  if(!auth.currentUser){
    currentUser = JSON.parse(sessionStorage.getItem('qProfile'));
    return uid === currentUser.uid
  }
  return uid === auth.currentUser.uid;
}