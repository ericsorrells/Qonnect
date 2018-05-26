// ========================================================================================
import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';
// ========================================================================================
import EventItems              from './EventItems';
import Search                  from '../components/Search';
import { auth }                from '../firebase/firebaseIndex';
import { startGetOtherEvents } from '../actions/Events_Actions';
// ========================================================================================
import { objToArray, getCurrentUserId } from '../utils/utils';
import { filterEvents }                 from '../utils/filters';
// ========================================================================================

class FindEvents extends React.Component {

  componentDidMount() {
    const user = getCurrentUserId(auth.getCurrentUser());
    this.props.startGetOtherEvents(user.uid)
  }

  // TODO: when clicking here and then back on Profile, you get 'other' events on 'AddEvent' page,
  // which should show user's events
  // do a componentDidUnmount that calls 'startGetProfile' here?

  render() {
    const { events } = this.props;
    return (
        <div className="find-events__container padding-left">
          <aside className="aside-container">
            <Search />
          </aside>
          <section className='find-events__section'>
            <div className='add-event__inner-container'>
              {events &&
                <EventItems
                events={events}
                history={this.props.history}
                deleteEvent={this.props.deleteEvent}
                />
              }
            </div>
          </section>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const eventsArray = objToArray(state.events);
  return { events: filterEvents(eventsArray, state.filters) }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGetOtherEvents: (userId) => dispatch(startGetOtherEvents(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindEvents);
