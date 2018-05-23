export const getUserEventsFromFirebase = (uid) => {
  return new Promise((resolve, reject) => {
    return database.ref(`events`).orderByChild('uid').equalTo(uid) .once('value')
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
