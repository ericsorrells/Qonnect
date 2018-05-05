export const objToArray = (myObj) => {
  if(!myObj) { return null }
  
  const objWithKeys = Object.entries(myObj).map(entry => { 
    const objWithId = {
      ...entry[1],
      id: entry[0]
    }
    return objWithId;
  })
  return objWithKeys
}

export const calcOpenEvents = (events) => {
  const openEvents = events.filter((event) => {
    return event.selectedGuest === ''
  })
  return openEvents;
}
