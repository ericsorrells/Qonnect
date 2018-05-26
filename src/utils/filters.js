import moment from 'moment';

export const filterEvents = (events, { location, category, searchTerm, sortBy, startDate, endDate }) => {
  const eventList = events
    .filter((event) => filterByCity(event, location))
    .filter((event) => filterByDate(event, startDate, endDate))
    .filter((event) => filterByCategory(event, category))
    .filter((event) => filterBySearchTerm(event, searchTerm))
    .sort((firstEvent, secondEvent) => {
      if(sortBy === true) {
        return firstEvent.date > secondEvent.date ? 1 : -1
      }
      return firstEvent.date > secondEvent.date ? -1 : 1
    })
    
  return eventList
}

const filterByCity = (event, location) => {
  if (location) {
    return event.location.includes(location)
  }
  return event;
}

const filterByDate = (event, startDate, endDate) => {
  if(event.date && startDate && endDate) {
    return moment(event.date).isBetween(startDate, endDate)
  }
  return event;
}

const filterByCategory = (event, category) => {
  if (category) {
    return event.category === category;
  }
  return event;
}

const filterBySearchTerm = (event, searchTerm) => {
  const searchTermCased = searchTerm.toLowerCase()
  const { eventName } = event
  const eventNameCased = eventName.toLowerCase();
  const descriptionCased = event.description.toLowerCase();
  if (searchTerm) {
    return descriptionCased.includes(searchTermCased) 
           || eventNameCased.includes(searchTermCased);
  }
  return event;
}
