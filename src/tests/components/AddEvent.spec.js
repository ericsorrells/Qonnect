// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
// ========================================================================================
// import AddEvent from '../../containers/AddEvent_Container';
// ========================================================================================
// import { startCreateEvent } from '../../actions/Events_Actions'
import { basicEvent }       from '../stubs/event';
import { basicProfile }     from '../stubs/profile'
// ========================================================================================

describe('<AddEvent />', () => {
  // let component;
  // beforeEach(() => {
    // TODO: component seems to be calling <Search />, which is failing
    // component = shallow(
    //   <AddEvent
    //     events={events}
    //     userId={ 'abc123' }
    //     profile={basicProfile}
    //     auth={ { uid: 'abc123' } }
    //     loading={false}
    //   />
    // )
  // });

  describe('rendering', () => {
    it('renders correctly', () => {
      // console.log('ADDEVENTS COMP', component)

    });

    it('renders all child components', () => {

    });

    it('doesnt render <EventItems /> if no events', () => {

    });
  })

  describe('componentDidMount()', () => {
    it('loads user profile if no events', () => {

    });

    it('loads user profile if no user events', () => {

    });

    it('wont load user profile if events', () => {

    });
  });

  describe('handleSubmit()', () => {
    it('calls startCreateEvent()', () => {

    });
  });
});