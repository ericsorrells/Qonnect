import { auth } from '../firebase/firebaseIndex';
import { history } from '../router/AppRouter';
import { firebase } from '../firebase/firebaseIndex';
import { getEventsFromFirebase } from './Events_Actions';
import { getProfileFromFirebase, updateProfile, setProfile } from './Profile_Actions';

export const doSignIn = ({ email, password, error }) => {
  return (dispatch, getState) => {
    return auth.doSignInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(signIn(user.uid));
        history.push(`/profile/${user.uid}`)
      })
      .catch((error) => {
        console.error('ERROR LOGGING IN: ', error)
        throw error
      })
  }
}

export const signOutOfFirebase = () => {
  return (dispatch) => {
    return auth.doSignOut()
      .then(() => {
        dispatch(signOut());
        console.log('SIGN OUT');
        window.localStorage.removeItem(firebase.storageKey);  
      })
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