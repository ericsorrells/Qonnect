// ========================================================================================
import React from 'react';
// ========================================================================================
import ShowComment from './ShowComment';
import ShowComment_Container from '../containers/ShowComment_Container';
// ========================================================================================


// TODO: make this a stateless component???
class ShowEvent extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { event } = this.props;
    const comments = event.comments.map((comment) => <ShowComment_Container eventId={event.id} comment={comment} />)
    return(
      <div>
      Event: { event.name } <br/>
      Date: { event.date } <br/>
      Inviter: {event.inviter } <br/>       
      Location: { event.location } <br/>
      Description: { event.description } <br/>
      Comments: {<ul>{ comments }</ul>}
      </div>
    )
  }
}

export default ShowEvent;