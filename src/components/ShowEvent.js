// ========================================================================================
import React from 'react';
// ========================================================================================
import ShowAcceptance from './ShowAcceptance';
import ShowAcceptance_Container from '../containers/ShowAcceptance_Container';
import moment from 'moment';
// ========================================================================================
import { objToArray, formatTime } from '../utils/utils'
// ========================================================================================

// TODO: make this a stateless component???
class ShowEvent extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const { event, acceptances, eventId } = this.props;
    let acceptancesArray, selectedAcceptance, unselectedAcceptances, formattedUnselectedAcceptances;
    if(acceptances) {
      acceptancesArray = objToArray(acceptances);
      selectedAcceptance = acceptances.find((acceptance) => acceptance.selected === true) || null;
      unselectedAcceptances = acceptances.filter((acceptance) => acceptance.selected !== true) || null;
      formattedUnselectedAcceptances = unselectedAcceptances.map((acceptance) => <ShowAcceptance_Container eventId={eventId} acceptance={acceptance} />)
    }

    return(
      <div className='show-event container'>
        <img src={event.imageUrl} className='show-event__image'/>
        <div>
          Event:       {event.eventName} <br />
          Date:        {moment(event.date).format("MMM DD, YYYY")} <br />
          Time:        {formatTime(event.time)}  <br />
          Category:    {event.category} <br />
          Inviter:     {event.userName} <br />
          Location:    {event.location} <br />
          Description: {event.description} <br />
          Selected:    {selectedAcceptance ? <div className='show-event__selected-acceptance'>{selectedAcceptance.acceptance}</div> : 'Open Event'} <br />
          Acceptances: {formattedUnselectedAcceptances ? <ul>{formattedUnselectedAcceptances}</ul> : 'None'}
        </div>
      </div>
    )
  }
}

export default ShowEvent;