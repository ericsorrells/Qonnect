// ========================================================================================
import React from 'react';
// ========================================================================================
import ShowAcceptance from './ShowAcceptance';
import ShowAcceptance_Container from '../containers/ShowAcceptance_Container';
// ========================================================================================
import { objToArray } from '../utils/utils'
// ========================================================================================

// TODO: make this a stateless component???
class ShowEvent extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { event, comments, eventId } = this.props;
    let commentsArray, selectedComment, unselectedComments, formattedUnselectedComments;
    if(comments) {
      commentsArray = objToArray(comments);
      selectedComment = comments.find((comment) => comment.selected === true) || null;
      unselectedComments = comments.filter((comment) => comment.selected !== true) || null;
      formattedUnselectedComments = unselectedComments.map((comment) => <ShowAcceptance_Container eventId={eventId} comment={comment} />)
    }
    return(
      <div className='show-event container'>
        <img src={event.url} className='show-event__image'/>
        <div>
          Event:       {event.name} <br />
          Date:        {event.date} <br />
          Inviter:     {event.inviter} <br />
          Location:    {event.location} <br />
          Description: {event.description} <br />
          Selected:    {selectedComment ? <div className='show-event__selected-comment'>{selectedComment.comment}</div> : 'None Selected'} <br />
          Comments:    {formattedUnselectedComments ? <ul>{formattedUnselectedComments}</ul> : 'None'}
        </div>
      </div>
    )
  }
}

export default ShowEvent;