import moment from 'moment';

export const getCurrentUserId = (user) => {
  console.log('UTILS USER============', user);
  if(!user) { 
    return JSON.parse(sessionStorage.getItem('qProfile')) 
  }
  return user
}
export const isEventOwner = (userId, eventId) => {
  console.log('IS EVENT OWNER', userId, eventId, userId === eventId);
  return userId === eventId;
}

export const calcOpenEvents = (events) => {
  const openEvents = events.filter((event) => {
    return event.selectedGuest === ''
  })
  return openEvents;
}

export const objToArray = (myObj) => {
  if (!myObj) { return null }

  const objWithKeys = Object.entries(myObj).map(entry => {
    const objWithId = {
      ...entry[1],
      id: entry[0]
    }
    return objWithId;
  })
  return objWithKeys
}

// remove unused fields so not to overwrite w blank form data
// spilt up into auth, profile, and app data for ease of saving
// to user or app databases
export const partitionData = (data) => {
  const authFields = ['email', 'passwordOne', 'passwordTwo'];
  const profileFields = ['displayName', 'photoURL'];
  const dataArray = objToPairedArray(data);

  let partionedData = { authData: {}, profileData: {}, appData: {} }
  dataArray.forEach((field) => {
    if(authFields.includes(field[0]) && field[1]) {
      partionedData.authData[field[0]] = field[1]
    } else if (profileFields.includes(field[0]) && field[1]) {
      partionedData.profileData[field[0]] = field[1]
    }
    else if (field[1]) {
      partionedData.appData[field[0]] = field[1]
    }
  })
  return partionedData;
}

export const objToPairedArray = (data) => {
  let array = []
  Object.keys(data).map((key) => {
    let subArray = [key, data[key]];
    array.push(subArray)
  });
  return array;
}

export const formatTime = (time) => {
  let period = 'AM'
  let [hour, minutes] = time.split(':')
  if(hour > 12) {
    hour = hour - 12;
    period = 'PM'
  }
  return `${hour}:${minutes} ${period}`
}

export const formatDate = (date) => {
  return moment(date).format('dddd, MMMM Do YYYY')
}
