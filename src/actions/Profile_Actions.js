import database from '../firebase/firebase';

export const getProfileFromFirebase = (uid) => {
  return (dispatch, getState) => {
    return database.ref(`users/${uid}`).once('value')
      .then((snapshot) => {
        dispatch(setProfile(snapshot.val()));
    })
  }
}

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

export const editUserEventListInFirebase = (userId, eventId) => {
  return (dispatch, getState) => {
    return database.ref(`users/${userId}/userEvents`).update({[`${eventId}`]: false})
      .then((snapshot) => {
        dispatch(editUserEventList(userId, eventId))
      }
    )
  }
}

export const editUserEventList = (userId, eventId) => {
  return {
    type: 'EDIT_USER_EVENT_LIST',
    userId,
    eventId
  }
}


export const deleteUserEventListFromFirebase = (userId, eventId) => {
  return(dispatch, getState) => {
    return database.ref(`users/${userId}/userEvents/${eventId}`).remove()
      .then(() => {
        dispatch(deleteUserEventList(eventId));
      }
    )
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