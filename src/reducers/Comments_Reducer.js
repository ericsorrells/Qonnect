// const defaultState = {
//   '1': {
//     'c1': { responder:'Joe Smith', comment:'Pick me! Im the biggest Falcons fan ever!', selected: false },
//     'c2': { responder:'Amber Jones', comment:'I love the Falcons', selected: false },
//     'c3': { responder:'John Doe', comment:'RISE UP! Lets do this!', selected: false }
//   },
//   '2': {
//     'c4': { responder: 'Alex Smith', comment:'I love steak', selected: false },
//     'c5': { responder: 'Maggie Smit', comment:'Im a lot of fun at dinners', selected: false },
//     'c6': { responder: 'Frank Thomas', comment:'I know which fork to use!', selected: false },
//     'c7': { responder: 'Lucy Hale', comment:'Im a great conversationtionalist', selected: false }
//   },
//   '3': {
//     'c8':  { responder:'Joe Smith', comment:'Pick me! Im the biggest UTD fan ever!', selected: false },
//     'c9':  { responder:'Amber Jones', comment:'I love UTD', selected: false },
//     'c10': { responder:'John Doe', comment:'Five Stripes Rule', selected: false },
//     'c11': { responder:'John Doe', comment:'GO ATL UTD!', selected: false },
//     'c12': { responder:'John Doe', comment:'Best Team Ever!', selected: false }
//   }
// }

// const defaultState = {
//   abc123: {
//     c1: { id:'c1', responder:'Joe Smith', comment:'Pick me! Im the biggest Falcons fan ever!', selected: false },
//     c2: { id:'c2',  responder:'Amber Jones', comment:'I love the Falcons', selected: false },
//     c3: { id:'c3',  responder:'John Doe', comment:'RISE UP! Lets do this!', selected: false }
//   },
//   def_456: {
//     c4: { id:'c4',  responder: 'Alex Smith', comment:'I love steak', selected: false },
//     c5: { id:'c5',  responder: 'Maggie Smit', comment:'Im a lot of fun at dinners', selected: false },
//     c6: { id:'c6',  responder: 'Frank Thomas', comment:'I know which fork to use!', selected: false },
//     c7: { id:'c7',  responder: 'Lucy Hale', comment:'Im a great conversationtionalist', selected: false }
//   },
//   xyz_789: {
//     c8:  { id:'c8',   responder:'Joe Smith', comment:'Pick me! Im the biggest UTD fan ever!', selected: false },
//     c9:  { id:'c9',   responder:'Amber Jones', comment:'I love UTD', selected: false },
//     c10: { id:'c10',  responder:'John Doe', comment:'Five Stripes Rule', selected: false },
//     c11: { id:'c11',  responder:'John Doe', comment:'GO ATL UTD!', selected: false },
//     c12: { id:'c12',  responder:'John Doe', comment:'Best Team Ever!', selected: false }
//   }
// }

const defaultState = {
  abc123: {
    c1: { responder:'Joe Smith', comment:'Pick me! Im the biggest Falcons fan ever!', selected: false },
    c2: { responder:'Amber Jones', comment:'I love the Falcons', selected: false },
    c3: { responder:'John Doe', comment:'RISE UP! Lets do this!', selected: false }
  },
  def_456: {
    c4: { responder: 'Alex Smith', comment:'I love steak', selected: false },
    c5: { responder: 'Maggie Smit', comment:'Im a lot of fun at dinners', selected: false },
    c6: { responder: 'Frank Thomas', comment:'I know which fork to use!', selected: false },
    c7: { responder: 'Lucy Hale', comment:'Im a great conversationtionalist', selected: false }
  },
  xyz_789: {
    c8:  { responder:'Joe Smith', comment:'Pick me! Im the biggest UTD fan ever!', selected: false },
    c9:  { responder:'Amber Jones', comment:'I love UTD', selected: false },
    c10: { responder:'John Doe', comment:'Five Stripes Rule', selected: false },
    c11: { responder:'John Doe', comment:'GO ATL UTD!', selected: false },
    c12: { responder:'John Doe', comment:'Best Team Ever!', selected: false }
  }
}

const commentsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SELECT_COMMENT':
      return {
        ...state,
        [action.eventId]: {
          ...state[action.eventId],
          [action.commentId]: {
            ...state[action.eventId][action.commentId],
            selected: true
          }
        }
      }
    default:
      return state
  }
}

export default commentsReducer;