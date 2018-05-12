const defaultState = {}
// const defaultState = {uid: "NClNDy4YHLMdy7ILKcQGcHpI4OD3"}

export const authReducer = (state = defaultState, action) => {
  console.log('SIGN IN REDUCER', action);
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