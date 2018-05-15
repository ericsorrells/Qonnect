// ========================================================================================
import React from 'react';
// ========================================================================================
import { isEventOwner } from '../utils/utils'
// ========================================================================================

// TODO: make this a stateless component???
class ShowAcceptance extends React.Component {
  constructor(props) {
    super(props)
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(eventId, acceptanceId) {
    // TODO: deselect any selected acceptances
    this.props.chooseAcceptance(eventId, acceptanceId)
  }
  // TODO: add conditional around button to make sure currentUser owns the event
  // before the button to 'Select Acceptance' is shown
  render() {
    const { id, userName, acceptanceNote, selected, createAt } = this.props.acceptance;
    return (
      <li>
        <div>{ acceptanceNote }</div>
        <div>
          <span>{userName}</span>
          {
            isEventOwner(this.props.userId, this.props.eventId) &&
            <button onClick={() => this.onSelect(this.props.eventId, id)}>Select Acceptance</button>
          }
        </div>
      </li>
    )
  }
}

export default ShowAcceptance;