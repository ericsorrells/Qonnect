// ========================================================================================
import React from 'react';
// ========================================================================================
import EventForm from '../components/EventForm';
// ========================================================================================

// TODO: Can this be a stateless component???
class EditEvent extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { id, name, date, location, description } = event;
    this.props.editEvent(id, { name, date, location, description })
    this.props.history.push(`/show-event/${id}`); 
  }

  render() {
    return (
      <div>
        <EventForm
          event={this.props.event}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

// const EditEvent = (event, props) => {
//   const onSubmit = (event)  => {
//     console.log('PROPS', props);
//     console.log('EVENT', event);
//     const { id, name, date, location, description } = event;
//     this.props.editEvent(id, { name, date, location, description })
//     this.props.history.push(`/show-event/${id}`); 
//   }

//   return(
//     <div>
//       <EventForm 
//         event={props.event}
//         onSubmit={onSubmit}
//       />
//     </div>
//   )
// }

export default EditEvent;