const defaultState = {
  sortBy:     'date',
  city:       '',
  startDate:  '',
  endDate:    '',
  category:   '',
  searchTerm: ''
}

const filtersReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_FILTERS':
      return {
        ...state,
        ...action.searchParams
      }
    case 'CLEAR_FILTERS':
      return {
        ...state,
        ...defaultState
      }
    default:
      return state
  }
}

export default filtersReducer;