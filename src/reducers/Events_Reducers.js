const defaultState = [
  {id: 1, name:'Falcons Game', inviter: 'Jon Doe', date:'Nov 13, 2018', location: 'Mercedes Benz', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .', url: 'https://i.imgur.com/x443dJI.jpg',
    comments: [
      {responder:'Joe Smith', comment:'Pick me! Im the biggest Falcons fan ever!'},
      {responder:'Amber Jones', comment:'I love the Falcons'},
      {responder:'John Doe', comment:'RISE UP! Lets do this!'}
    ]},
  {id: 2, name:'Dinner With ME!', inviter: 'John Doe', date:'Aug 19, 2018', location: 'Chilis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .', url:'https://i.imgur.com/hU6EISo.jpg',
    comments: [
      {responder: 'Alex Smith', comment:'I love steak'},
      {responder: 'Maggie Smit', comment:'Im a lot of fun at dinners'},
      {responder: 'Frank Thomas', comment:'I know which fork to use!'},
      {responder: 'Lucy Hale', comment:'Im a great conversationtionalist'}
    ]},
  {id: 3, name:'ATL United Game', inviter: 'John Doe', date:'Sept 21, 2018', location: 'Mercedes Benz', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .', url:'https://i.imgur.com/gc48lZa.png',
  comments: [
    {responder:'Joe Smith', comment:'Pick me! Im the biggest UTD fan ever!'},
    {responder:'Amber Jones', comment:'I love UTD'},
    {responder:'John Doe', comment:'Five Stripes Rule'},
    {responder:'John Doe', comment:'GO ATL UTD!'},
    {responder:'John Doe', comment:'Best Team Ever!'}
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
      return state;        // CHANGE THIS!!!
    case 'DELETE_EVENT':
      return state.filter((event) => event.id !== action.id);
    default:
      return state;  
  }
};

export default eventsReducer;
