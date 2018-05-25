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

export const editEventInFirebase = (eventId, eventUpdates) => {
  return new Promise((resolve, reject) => {
    return database.ref(`events/${eventId}`).update(eventUpdates)
      .then(() => resolve())
  })
}

// TODO: does FB return anything here?
export const deleteEventInFirebase = (eventId) => {
  return new Promise((resolve, reject) => {
    return database.ref(`events/${eventId}`).remove()
      .then(() =>  resolve() )
  })
}

export const getOtherUserEventsFromFirebase = (userId) => {
  let events = {}
  return new Promise((resolve, reject) => {
    return database.ref(`events`).orderByChild('selectedUser').equalTo('none').limitToFirst(200).once('value')
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          if(childSnapshot.val().uid !== userId) {
            events[childSnapshot.key] = childSnapshot.val()
          }
        })
      }).then(() => {
        if(Object.keys(events).length > 0) {
          resolve(events)
        } else {
          reject(new Error('FAILURE IN GET OTHER USER EVENTS FROM FIREBASE: ', error))
        }
      })
  })
}
