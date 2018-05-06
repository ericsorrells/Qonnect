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
        <img src={event.url} className='show-event__image'/>
        <div>
          Event:       {event.name} <br />
          Date:        {event.date} <br />
          Inviter:     {event.inviter} <br />
          Location:    {event.location} <br />
          Description: {event.description} <br />
          Selected:    {selectedAcceptance ? <div className='show-event__selected-acceptance'>{selectedAcceptance.acceptance}</div> : 'None Selected'} <br />
          Acceptances:    {formattedUnselectedAcceptances ? <ul>{formattedUnselectedAcceptances}</ul> : 'None'}
        </div>
      </div>
    )
  }
}

export default ShowEvent;