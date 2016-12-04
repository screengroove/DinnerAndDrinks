export const addLoc = (loc) => ({
  type: 'CHANGE_LOCATION',
  loc: { lat: loc.lat, long: loc.long }
})

export const addTerm = (term) => ({
  type: 'CHANGE_TERM',
  term: term
})

