import database from '../firebase/firebase';

export const getProfileFromFirebase = (uid) => {
   return new Promise((resolve, reject) => {
    database.ref(`users/${uid}`).once('value')
     .then((snapshot) => {
       if(snapshot.val()) {
         resolve(snapshot.val())
       } else {
         reject(new Error('FAILED TO GET PROFILE FROM FIREBASE: ', error))
       }
     })
  })
}
// export const getProfileFromFirebase = (uid) => {
//   console.log('GETTING PROFILE FROM FB', uid);
//   return (dispatch, getState) => {
//     console.log('GETTING PROFILE FROM FB 2');
//     return database.ref(`users/${uid}`).once('value')
//       .then((snapshot) => {

//     console.log('GETTING PROFILE FROM FB 3', snapshot.val());
//         dispatch(setProfile(snapshot.val()));
//         console.log('END GETTING PROFILE FROM FB');
//     })
//   }
// }

export const setProfile = (profileUpdates) => {
  return {
    type: 'SET_PROFILE',
    profileUpdates
  }
}

export const getProfile = () => {
  return {
    type: 'GET_PROFILE'
  }
}

export const createProfile = (profileInfo) => {
  return {
    type: 'CREATE_PROFILE',
    profileInfo
  }
}

export const updateProfileInFirebase = (profileUpdates = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    event.uid = uid
    return database.ref(`users/${uid}`).update(profileUpdates)
      .then(() => {
        dispatch(updateProfile(profileUpdates));
      }
    )
  }
}

export const updateProfile = (profileUpdates) => {
  return {
    type: 'UPDATE_PROFILE',
    profileUpdates
  }
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

export const editUserEventList = (userId, eventId) => {
  return {
    type: 'EDIT_USER_EVENT_LIST',
    userId,
    eventId
  }
}

// add event to users 'acceptedEvents' object
export const createUserAcceptedEventInFirebase = (userId, eventId) => {
  console.log('USER ACCEPTED EVENT', userId, eventId);
  return (dispatch, getState) => {
    return database.ref(`users/${userId}/acceptedEvents`).update({[`${eventId}`]: false})
      .then(() => {
        dispatch(addEventToAcceptedEvent(eventId))
      })
  }
}

const addEventToAcceptedEvent = (eventId) => {
  return {
    type: 'ADD_EVENT_TO_ACCEPTED_EVENTS',
    eventId
  }
}

export const deleteUserEventList = (eventId) => {
  return {
    type: 'DELETE_USER_EVENT_LIST',
    eventId
  }
}

export const updateUserAcceptedEventInFirebase = (eventId, userId) => {
  return (dispatch, getState) => {
    return database.ref(`users/${userId}/acceptedEvents`).update({[`${eventId}`]: true})
      .then((snapshot) => {
        dispatch(createUserAcceptedEvent(snapshot.val()));
    })
  }
}

export const createUserAcceptedEvent = (eventId, userId) => {
  return {
    type: 'USER_ACCEPTED_EVENT',
    eventId,
    userId
  }
}