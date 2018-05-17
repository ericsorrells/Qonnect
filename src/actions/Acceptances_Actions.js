// ========================================================================================
import database from '../firebase/firebase';
import { history } from '../router/AppRouter';
// ========================================================================================

export const createAcceptanceInFirebase = (acceptanceInfo) => {
  return (dispatch, getState) => {
    return database.ref(`acceptances/${acceptanceInfo.eventId}`).push({ ...acceptanceInfo })
      .then((ref) => {
        dispatch(createAcceptance(acceptanceInfo));
        history.push(`/show-event/${encodeURIComponent(acceptanceInfo.eventId)}`)
      }
    )
  };
}

export const createAcceptance = (acceptanceInfo) => {
  return {
    type: 'CREATE_ACCEPTANCE',
    acceptanceInfo
  }
}

export const getEventAcceptancesFromFirebase = (eventId) => {
  const acceptances = {};
  return (dispatch, getState) => {
    const userId = getState().auth.uid;
    return database.ref(`acceptances/${eventId}`)
    .once('value')
    .then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        acceptances[childSnapshot.key] = childSnapshot.val()
      })
      dispatch(createAcceptances(acceptances))
    })
  };
}

export const createAcceptances = (acceptances) => {
  return {
    type: 'CREATE_ACCEPTANCES',
    acceptances
  }
}

export const updateAcceptanceSelectionInFirebase = (eventId, acceptanceId) => {
  console.log('IN FIREBASE', eventId, acceptanceId);
  return (dispatch, getState) => {
    return database.ref(`acceptances/${eventId}/${acceptanceId}`).update({selected: true})
      .then(() => {
        dispatch(chooseAcceptance(eventId, acceptanceId))
      }
    )
  }
}

export const chooseAcceptance = (eventId, acceptanceId) => {
  return {
    type: 'SELECT_ACCEPTANCE',
    eventId,
    acceptanceId
  }
}