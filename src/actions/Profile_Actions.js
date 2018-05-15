import database from '../firebase/firebase';

export const getProfileFromFirebase = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    event.uid = uid
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


export const createUserAcceptedEventInFirebase = (eventId, userId) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    event.uid = uid
    return database.ref(`users/${uid}/acceptedEvents`).update({[`${eventId}`]: true})
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