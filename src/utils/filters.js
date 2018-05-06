export const filterEvents = (events, { city, category, searchTerm, sortBy }) => {
  console.log('FILTERING EVENTS!!!', events);
  const eventList = events
    .filter((event) => filterByCity(event, city))
    .filter((event) => filterByCategory(event, category))
    .filter((event) => filterBySearchTerm(event, searchTerm))
    .sort((firstEvent, secondEvent) => {
      if(sortBy === true) {
        return firstEvent.createdAt > secondEvent.createdAt ? 1 : -1
      }
      return firstEvent.createdAt > secondEvent.createdAt ? -1 : 1
    })
  return eventList
}

const filterByCity = (event, city) => {
  if (city) {
    return event.city === city
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
  // const term = searchTerm.toLowerCase()
  // const { name } = event
  // const eventName = name.toLowerCase();
  if (searchTerm) {
    return event.description.includes(searchTerm) || event.name.includes(searchTerm);
  }
  return event;
}
