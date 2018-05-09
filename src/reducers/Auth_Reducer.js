const defaultState = {}

export const authReducer = (state = defaultState, action) => {
  console.log('SIGN IN REDUCER', action);
  switch(action.type) {
    case 'SIGN_IN':
      return {
        uid: action.uid
      }
    case 'SIGN_OUT':
      return {};
    default:
      return state;
  }
}

export default authReducer;