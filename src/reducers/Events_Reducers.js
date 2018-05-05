const defaultState = {
  abc123: {
    name: 'Falcons Game', inviter: 'Jon Doe', date: 'Nov 13, 2018', location: 'Mercedes Benz', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .', url: 'https://i.imgur.com/x443dJI.jpg',
  },
  def_456: {
    name: 'Dinner With ME!', inviter: 'John Doe', date: 'Aug 19, 2018', location: 'Chilis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna.', url: 'https://i.imgur.com/hU6EISo.jpg',
  },
  xyz_789: {
    name: 'ATL United Game', inviter: 'John Doe', date: 'Sept 21, 2018', location: 'Mercedes Benz', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .', url: 'https://i.imgur.com/gc48lZa.png',
  }
};

const eventsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_EVENT':
    console.log('STATE', state);
    console.log('ACTION', action);
      return {
        ...state,
        // TODO: remove when moving to Firebase
        [(new Date).getTime()]: action.event
      }
    case 'EDIT_EVENT':
     // TODO: updates overwrites all attributes even those not shown
      return {
        ...state,
        [action.id]: action.updates
      }
    case 'DELETE_EVENT':
      const { [action.id]: deletedAttr, ...newState } = state;
      return {
        ...newState
      }
    default:
      return state;  
  }
};

export default eventsReducer;
