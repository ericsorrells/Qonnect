export const setFilters = (searchParams) => {
  return {
    type: 'SET_FILTERS',
    searchParams
  }
}

export const clearFilters = () => {
  return {
    type: 'CLEAR_FILTERS'
  }
}