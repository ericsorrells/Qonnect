import { auth } from '../firebase/firebaseIndex';

export const doSignIn = ({ email, password, error }) => {
  return () => {
    return auth.doSignInWithEmailAndPassword(email, password)
      .catch(error => {
        console.error('ERROR LOGGING IN: ', error)
      });
  }
}

export const signIn = (uid) => {
  console.log('SIGN IN ACTION', uid);
  return {
    type: 'SIGN_IN',
    uid
  }
}

export const doSignOut = () => {
  return () => {
    return auth.signOut();
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}