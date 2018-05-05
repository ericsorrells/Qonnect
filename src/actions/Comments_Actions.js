export const selectComment = (eventId, commentId) => {
  return {
    type: 'SELECT_COMMENT',
    eventId,
    commentId
  }
}