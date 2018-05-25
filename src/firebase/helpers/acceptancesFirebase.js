// ========================================================================================
import { auth }     from '../firebaseIndex';
import { firebase } from '../firebaseIndex';
import database     from '../firebase';
// ========================================================================================

export const getEventAcceptancesFromFirebase = (eventId) => {
  const acceptances = {}
  return new Promise((resolve, reject) => {
    return database.ref(`acceptances/${eventId}`).once('value')
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          acceptances[childSnapshot.key] = childSnapshot.val()
        })
      }).then(() => {
        // TODO: how to handle if there are no acceptances yet?
        // can we check for 200?
        // if(Object.keys(acceptances) > 0) {
          resolve(acceptances)
        // }
        // else {
          // TODO: how to pass error here
        //   reject('ERROR IN GET ACCEPTANCES FROM FIREBASE: ')
        // }
      })
  })
}

export const createAcceptanceInFirebase = (acceptanceInfo) => {
  return new Promise((resolve, reject) => {
    return database.ref(`acceptances/${acceptanceInfo.eventId}`).push({...acceptanceInfo})
      .then((ref) => {
        if (ref) {
          resolve( { ...acceptanceInfo } );
        } else {
          reject(new Error('FAILED TO SAVE EVENT TO FIREBASE: ', error))
        }
      })
  })
}

export const updateAcceptanceSelectionInFirebase = (eventId, acceptanceId) => {
  return new Promise((resolve, reject) => {
    return database.ref(`acceptances/${eventId}/${acceptanceId}`).update({ selected: true })
      .then(() => resolve())
  })
}