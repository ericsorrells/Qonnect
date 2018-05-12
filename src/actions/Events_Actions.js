import database from '../firebase/firebase';
import { history } from '../router/AppRouter';

export const createEventInFirebase = (event = {}) => {
  return (dispatch, getState) => {
    return database.ref(`events`).push(event)
      .then((ref) => {
        dispatch(addEvent(ref.key, {...event}));
        history.push(`/show-event/${encodeURIComponent(ref.key)}`)
      }
    )
  }
}

export const addEvent = (key, event) => {
  return {
    type: 'ADD_EVENT',
    key,
    event
  }
}

export const getEventsFromFirebase = () => {
  const events = {};
  return (dispatch, getState) => {
    const userId = getState().auth.uid;
     return database.ref(`events`).orderByChild('uid').equalTo(userId)
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          events[childSnapshot.key] = childSnapshot.val()
        })
        dispatch(addEvents(events))
      })
  };
};

export const addEvents = (events) => {
  return {
    type: 'ADD_EVENTS',
    events
  }
}

export const editEvent = (id, updates) => {
  return {
    type: 'EDIT_EVENT',
    id,
    updates
  }
}

export const deleteEvent = (id) => {
  return {
    type: 'DELETE_EVENT',
    id
  }
}
