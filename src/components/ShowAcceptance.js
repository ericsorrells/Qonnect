// ========================================================================================
import React from 'react';
import { Link }  from 'react-router-dom';
// ========================================================================================
import { isEventOwner } from '../utils/utils';
import { getCurrentUser } from '../firebase/auth';
// ========================================================================================

const ShowAcceptance = (props) => {
  const onSelect = (eventId, acceptanceId) => {
    // TODO: deselect any selected acceptances (ie, ability to change your mind about an acceptance)
    props.updateAcceptanceSelectionInFirebase(eventId, acceptanceId)
  }
  
  const { id, userName, acceptanceNote, createAt, selected = null } = props.acceptance;

  return (
    <li>
      <div>{acceptanceNote}</div>
      <div>
        <span>
          <Link to={`/profile/${props.acceptance.userId}`}>{ userName }</Link>
        </span>
        {
          isEventOwner(props.userId, props.event.uid) &&
          !selected &&
          <button onClick={() => onSelect(props.eventId, id)}>Select Acceptance</button>
        }
      </div>
    </li>
  )
}

export default ShowAcceptance;