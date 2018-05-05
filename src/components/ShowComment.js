// ========================================================================================
import React from 'react';
// ========================================================================================

// TODO: make this a stateless component???
// TODO: onSelect is firing automatically, adding 'id' inside each comment
class ShowComment extends React.Component {
  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this);
  }
  
  onSelect(eventId, commentId) {
    console.log('ON SELECT FIRING!!!!!');
    // TODO: deselect any selected comments
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