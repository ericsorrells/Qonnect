// ========================================================================================
import React from 'react';
// ========================================================================================

// TODO: make this a stateless component???
class ShowComment extends React.Component {
  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this);
  }
  
  onSelect(eventId, commentId) {
    console.log('ON_SEL_COMMENT eventId', eventId);
    console.log('ON_SEL_COMMENT commentId', commentId);
    this.props.selectComment(eventId, commentId)
  }

  render() {
    const { id: commentId, comment: commentText, responder } = this.props.comment;
    return (
      <li>
        <div>{commentText}</div>
        <div>
          <span>{responder}</span>
          <button onClick={() => this.onSelect(this.props.eventId, commentId)}>Select Comment</button>
        </div>
      </li>
    )
  }
}

export default ShowComment;