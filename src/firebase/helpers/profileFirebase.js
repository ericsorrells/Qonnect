// ========================================================================================
import { auth }     from '../firebaseIndex';
import { firebase } from '../firebaseIndex';
import database     from '../firebase';
// ========================================================================================

export const getProfileFromFirebase = (userId) => {
   return new Promise((resolve, reject) => {
    database.ref(`users/${userId}`).once('value')
     .then((snapshot) => {
       if(snapshot.val()) {
         resolve(snapshot.val())
       } else {
         reject(new Error('FAILED TO GET PROFILE FROM FIREBASE: ', error))
       }
     })
  })
}

export const addToUserEventListInFirebase = (userId, eventId) => {
  return new Promise((resolve, reject) => {
    return database.ref(`users/${userId}/userEvents`).update({[`${eventId}`]: false})
    .then(() => resolve())
  })
}

export const deleteUserEventListFromFirebase = (userId, eventId) => {
  return new Promise((resolve, reject) => {
    return database.ref(`users/${userId}/userEvents/${eventId}`).remove()
    .then(() => resolve())
  })
}