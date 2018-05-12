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
        history.push('/profile')
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
// TODO: Delete this if it won't work
// export const doSignUp = (dispatch, email, passwordOne) => {
//   return auth.doSignInWithEmailAndPassword(email, password)
//     .then((user) => {
//       dispatch(signIn(user.uid));
//       dispatch(getProfileFromFirebase())
//       dispatch(getEventsFromFirebase())
//       history.push('/profile')
//     })
//     .catch((error) => {
//       console.error('ERROR LOGGING IN: ', error)
//     });
// }

export const signIn = (uid) => {
  return {
    type: 'SIGN_IN',
    uid
  }
}

// export const doSignOut = () => {
//   return {
//     type: 'SIGN_OUT'
//   }
// }

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
}