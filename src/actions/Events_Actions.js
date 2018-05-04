export const addEvent = (event) => {
  return {
    type: 'ADD_EVENT',
    event
  }
}

export const editEvent = (id, updates) => {
  return {
    type: 'EDIT_EVENT',
    id,
    updates
  }
}

export const deleteEvent = (id) => {
  return {
    type: 'DELETE_EVENT',
    id
  }
}

export const selectComment = (eventId, commentId) => {
  console.log('SELEC_COMMENT eventId', eventId);
  console.log('SELEC_COMMENT commentId', commentId);
  return {
    type: 'SELECT_COMMENT',
    eventId, 
    commentId
  }
}