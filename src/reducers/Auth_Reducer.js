const defaultState = {}

export const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SIGN_IN':
      return {
        uid: action.uid
      }
    case 'SIGN_OUT':
      return defaultState;
    default:
      return state;
  }
}

export default authReducer;