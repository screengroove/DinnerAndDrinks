export const addLoc = (lat, long) => ({
  type: 'CHANGE_LOCATION',
  loc: {lat: lat, long: long}
})

export const addTerm = (term) => ({
  type: 'CHANGE_TERM',
  term: term
})

