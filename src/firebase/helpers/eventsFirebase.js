// ========================================================================================
import { auth }     from '../firebaseIndex';
import { firebase } from '../firebaseIndex';
import database     from '../firebase';
// ========================================================================================

export const getUserEventsFromFirebase = (userId) => {
  return new Promise((resolve, reject) => {
    return database.ref(`events`).orderByChild('uid').equalTo(userId) .once('value')
      .then((snapshot) => {
        if(snapshot) {
          resolve(snapshot.val())
        } else {
          reject(new Error('FAILED TO GET USER EVENTS FROM FIREBASE: ', error))
        }
      })
  })
}

export const createEventInFirebase = (event = {}) => {
  return new Promise((resolve, reject) => {
    return database.ref(`events`).push(event)
      .then((ref) => {
        if(ref) {
          resolve({key: ref.key, event: {...event}});
        } else {
          reject(new Error('FAILED TO SAVE EVENT TO FIREBASE: ', error))
        }
      })
  })
}

// TODO: does FB return anything here?
export const deleteEventInFirebase = (eventId) => {
  return new Promise((resolve, reject) => {
    return database.ref(`events/${eventId}`).remove()
      .then(() =>  resolve() )
  })
}
