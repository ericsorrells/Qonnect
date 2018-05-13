// ========================================================================================
import React from 'react';
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

  render() {
    const { id: acceptanceId, acceptance: acceptanceText, responder } = this.props.acceptance;
    return (
      <li>
        <div>{acceptanceText}</div>
        <div>
          <span>{responder}</span>
          <button onClick={() => this.onSelect(this.props.eventId, acceptanceId)}>Select Acceptance</button>
        </div>
      </li>
    )
  }
}

export default ShowAcceptance;