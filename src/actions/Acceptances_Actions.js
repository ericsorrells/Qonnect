export const selectAcceptance = (eventId, acceptanceId) => {
  return {
    type: 'SELECT_COMMENT',
    eventId,
    acceptanceId
  }
}