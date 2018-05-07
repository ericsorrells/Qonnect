export const setFilters = (searchParams) => {
  return {
    type: 'SET_FILTERS',
    searchParams
  }
}

export const clearFilters = (newState) => {
  return {
    type: 'CLEAR_FILTERS'
  }
}