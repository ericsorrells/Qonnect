import { auth } from '../firebase/firebaseIndex';
import { history } from '../router/AppRouter';
import { getEventsFromFirebase } from './Events_Actions';
import { getProfileFromFirebase, updateProfile, setProfile } from './Profile_Actions';

export const doSignIn = ({ email, password, error }) => {
  return (dispatch, getState) => {
    return auth.doSignInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(signIn(user.uid));
        dispatch(setProfile({ displayName: user.displayName, photoURL: user.photoURL }))
        dispatch(getProfileFromFirebase())
        dispatch(getEventsFromFirebase())
        history.push('/profile')
      })
      .catch((error) => {
        console.error('ERROR LOGGING IN: ', error)
        throw error
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