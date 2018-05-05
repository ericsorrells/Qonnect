// ========================================================================================
import React from 'react';
// ========================================================================================
import ShowComment from './ShowComment';
import ShowComment_Container from '../containers/ShowComment_Container';
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
    console.log('PROPS', this.props);
    const commentsArray = objToArray(comments);
    const selectedComment = comments.find((comment) => comment.selected === true);
    const unselectedComments = comments.filter((comment) => comment.selected !== true)
    const formattedUnselectedComments = unselectedComments.map((comment) => <ShowComment_Container eventId={eventId} comment={comment} />)
    return(
      <div>
      Event:       { event.name } <br/>
      Date:        { event.date } <br/>
      Inviter:     { event.inviter } <br/>       
      Location:    { event.location } <br/>
      Description: { event.description } <br/>
      Selected:    { selectedComment ? selectedComment.comment : null } <br/>
      Comments:    {<ul>{ formattedUnselectedComments }</ul>}
      </div>
    )
  }
}

export default ShowEvent;