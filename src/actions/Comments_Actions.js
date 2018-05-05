export const selectAcceptance = (eventId, commentId) => {
  return {
    type: 'SELECT_COMMENT',
    eventId,
    commentId
  }
}