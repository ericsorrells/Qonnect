// ========================================================================================
import { auth }     from '../firebaseIndex';
import { firebase } from '../firebaseIndex';
import database     from '../firebase';
// ========================================================================================

export const deleteUserEventListFromFirebase = (userId, eventId) => {
  return new Promise((resolve, reject) => {
    return database.ref(`users/${userId}/userEvents/${eventId}`).remove()
      .then(() => resolve())
  })
}

export const addToUserEventListInFirebase = (userId, eventId) => {
  return new Promise((resolve, reject) => {
    return database.ref(`users/${userId}/userEvents`).update({[`${eventId}`]: false})
      .then(() => resolve())
  })
}

// export const editUserEventListInFirebase = (userId, eventId) => {
//   return (dispatch, getState) => {
//     return database.ref(`users/${userId}/userEvents`).update({[`${eventId}`]: false})
//       .then((snapshot) => {
//         dispatch(editUserEventList(userId, eventId))
//       }
//     )
//   }
// }