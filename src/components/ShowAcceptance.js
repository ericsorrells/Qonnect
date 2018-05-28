// ========================================================================================
import React from 'react';
import { Link }  from 'react-router-dom';
import { connect } from 'react-redux';
// ========================================================================================
import { startOwnerSelectsGuest } from '../actions/Acceptances_Actions';
import { isEventOwner, formatText } from '../utils/utils';
import { getCurrentUser } from '../firebase/auth';
// ========================================================================================

const ShowAcceptance = (props) => {
  const onSelect = (eventId, acceptanceId) => {
    // TODO: deselect any selected acceptances (ie, ability to change your mind about an acceptance)
    props.startOwnerSelectsGuest(eventId, acceptanceId)
  }

  const { id, userName, acceptanceNote, userPhotoURL, createAt, selected = null } = props.acceptance;
  const { photoURL } = props.user

  return (
    <div className='show-acc_container'>
      <div>
        <Link to={`/profile/${props.acceptance.userId}`} >
          <img src={userPhotoURL} className='show-acc__imageUrl'/>
        </Link>
      </div>
      <div className='show-acc__main-body'>
        <div>
          <div className='show-acc__name-container'>
            <Link to={`/profile/${props.acceptance.userId}`} className='show-acc__name' >
              { userName }
            </Link>
          </div>
          <div className='show-acc__note'>
            { acceptanceNote }
          </div>
        </div>
      </div>
      <div className='show-acc__selection-icon'>
        {
          isEventOwner(props.userId, props.event.uid) && !selected &&
          <a onClick={() => onSelect(props.eventId, id)}><i className='fas fa-thumbs-up'></i></a>
        }
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { 
    startOwnerSelectsGuest: (eventId, acceptanceId) => dispatch(startOwnerSelectsGuest(eventId, acceptanceId))
  }
}

export default connect(null, mapDispatchToProps)(ShowAcceptance);