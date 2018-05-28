// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// ========================================================================================
import EventItems from './EventItems';
import Search from '../components/Search';
import Spinner from './Spinner';
import { auth } from '../firebase/firebaseIndex';
import { startGetOtherEvents } from '../actions/Events_Actions';
// ========================================================================================
import { objToArray, getCurrentUserId } from '../utils/utils';
import { filterEvents } from '../utils/filters';
// ========================================================================================

class FindEvents extends React.Component {

  componentDidMount() {
    const user = getCurrentUserId(auth.getCurrentUser());
    this.props.startGetOtherEvents(user.uid)
  }

  componentDidUnmount() {
    if (this.props.match.params.id !== this.props.userId) {
      this.props.startGetProfile(this.props.userId);
    }
  }

  render() {
    const component = this.props.loading.loading 
      ? <Spinner /> 
      : <FindEventsComponent  
          events={this.props.events}
          history={this.props.history}
          deleteEvent={this.props.deleteEvent}
        />
    return (
      <div>
        {component}
      </div>
    )
  }
}

const FindEventsComponent = ({ events, history, deleteEvent }) => {
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
              history={history}
              deleteEvent={deleteEvent}
            />
          }
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = (state) => {
  const eventsArray = objToArray(state.events);
  return {
    events: filterEvents(eventsArray, state.filters),
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGetOtherEvents: (userId) => dispatch(startGetOtherEvents(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindEvents);
