// ========================================================================================
import React from 'react';
// ========================================================================================
import EventForm from '../containers/EventForm_Container';
// ========================================================================================

const EditEvent = () => {
  const onSubmit = () => {
    console.log('EDIT_EVENT ON SUBMIT')
  }

  return(
    <div>
      <EventForm onSubmit={onSubmit}/>
    </div>
  )
}

export default EditEvent;