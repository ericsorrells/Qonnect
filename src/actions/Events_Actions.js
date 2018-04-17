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
    type: 'DELETE_EXPENSE',
    id
  }
}