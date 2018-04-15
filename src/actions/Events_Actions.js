export const addEvent = (event) => {
  console.log('ACTION: ', event);
  return {
    type: 'ADD_EVENT',
    event
  }
}