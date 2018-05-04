const defaultState = [
  {id: 1, name:'Falcons Game', inviter: 'Jon Doe', date:'Nov 13, 2018', location: 'Mercedes Benz', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .', url: 'https://i.imgur.com/x443dJI.jpg',
    comments: [
      {id:1, responder:'Joe Smith', comment:'Pick me! Im the biggest Falcons fan ever!', selected: false },
      {id:2, responder:'Amber Jones', comment:'I love the Falcons', selected: false },
      {id:3, responder:'John Doe', comment:'RISE UP! Lets do this!', selected: false }
    ]},
  {id: 2, name:'Dinner With ME!', inviter: 'John Doe', date:'Aug 19, 2018', location: 'Chilis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna.', url:'https://i.imgur.com/hU6EISo.jpg',
    comments: [
      {id:4, responder: 'Alex Smith', comment:'I love steak', selected: false },
      {id:5, responder: 'Maggie Smit', comment:'Im a lot of fun at dinners', selected: false },
      {id:6, responder: 'Frank Thomas', comment:'I know which fork to use!', selected: false },
      {id:7, responder: 'Lucy Hale', comment:'Im a great conversationtionalist', selected: false }
    ]},
  {id: 3, name:'ATL United Game', inviter: 'John Doe', date:'Sept 21, 2018', location: 'Mercedes Benz', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .', url:'https://i.imgur.com/gc48lZa.png',
  comments: [
    {id:8, responder:'Joe Smith', comment:'Pick me! Im the biggest UTD fan ever!', selected: false },
    {id:9, responder:'Amber Jones', comment:'I love UTD', selected: false },
    {id:10,responder:'John Doe', comment:'Five Stripes Rule', selected: false },
    {id:11,responder:'John Doe', comment:'GO ATL UTD!', selected: false },
    {id:12,responder:'John Doe', comment:'Best Team Ever!', selected: false }
  ]},
];

const eventsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        action.event
      ]
    case 'EDIT_EVENT':
      return state.map((event) => {
        if(event.id === action.id) {
          return {
            ...event,
            ...action.updates
          }
        } else {
            return event
          }
        }
      )
    case 'SELECT_COMMENT':
      console.log('STATE', newState);
      console.log('ACTION', action);
      // const newState = state.map((event) => { 
      // return state.map((event) => {
      //   if (event.id === action.eventId) {
      //     return event.comments.map((comment) => {
      //       if (comment.id === action.commentId) {
      //         return {
      //           ...comment,
      //           selected: true
      //         }
      //       } else {
      //         return comment
      //       }
      //     })
      //   } else {
      //     return event
      //   }
      // })

      // console.log('NEW STATE', newState);
    case 'DELETE_EVENT':
      return state.filter((event) => event.id !== action.id);
    default:
      return state;  
  }
};

export default eventsReducer;
