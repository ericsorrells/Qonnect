const defaultState = { }

const acceptancesReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SELECT_ACCEPTANCE':
      return {
        ...state,
        [action.acceptanceId]: {
          ...state[action.acceptanceId],
          selected: true
        }
      }
    case 'CREATE_ACCEPTANCE':
      return {
        ...state,
        [action.acceptanceInfo.eventId]: {
          ...state[action.acceptanceInfo.eventId],
          ...action.acceptanceInfo
        } 
      }  
    case 'CREATE_ACCEPTANCES':
      return action.acceptances;  
    default:
      return state
  }
}

export default acceptancesReducer;