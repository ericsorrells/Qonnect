export const chooseAcceptance = (eventId, acceptanceId) => {
  return {
    type: 'SELECT_COMMENT',
    eventId,
    acceptanceId
  }
}