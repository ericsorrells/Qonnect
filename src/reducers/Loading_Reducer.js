const defaultState = { }

const loadingReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'START_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'END_LOADING':
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default loadingReducer;