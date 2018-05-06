// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
// ========================================================================================
import EventItems from './EventItems';
import SearchContainer     from '../containers/Search_Container';
// ========================================================================================

const FindEvents = (props) => {
  const { events } = props;
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
            />
          }
        </section>
      </div>
    </div>
  )
}

export default FindEvents;