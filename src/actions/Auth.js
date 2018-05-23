// ========================================================================================
import { auth } from '../firebase/firebaseIndex';
import { history } from '../router/AppRouter';
import { firebase } from '../firebase/firebaseIndex';
// ========================================================================================

export const startSignIn = (authInfo) => {
  return {
    type: 'START_SIGN_IN',
    authInfo
  }
}

export const startSignOut = () => {
  return {
    type: 'START_SIGN_OUT'
  }
}

export const signIn = (uid) => {
  return {
    type: 'SIGN_IN',
    uid
  }
}

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}

export const endSignIn = () => {
  return {
    type: 'END_SIGN_IN'
  }
}

export const endSignOut = () => {
  return {
    type: 'END_SIGN_OUT'
  }
}