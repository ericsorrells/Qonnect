// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
// ========================================================================================
import EventItems from './EventItems';
import SearchContainer from '../containers/Search_Container';
// ========================================================================================

class FindEvents extends React.Component {

  componentDidMount() {
    this.props.getOtherUserEventsFromFirebase()
  }

  render() {
    const { events } = this.props;
    return (
      <div className="profile__outer-container">
        <div className="container profile__inner-container">
          <aside className="aside-container">
            <SearchContainer />
          </aside>
          <section>
            {events &&
              <EventItems
                events={events}
                history={this.props.history}
                deleteEvent={this.props.deleteEvent}
              />
            }
          </section>
        </div>
      </div>
    )
  }
}

export default FindEvents;