const defaultState = [];

const eventsReducer = (state = defaultState, action) => {
  console.log('REDUCER_STATE: ', state);
  console.log('RESDUCER_ACTION:', action);
  switch(action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        action.event
      ]
    default:
      return state;  
  }
};

export default eventsReducer;
