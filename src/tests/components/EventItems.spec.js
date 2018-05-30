// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
// ========================================================================================
import EventItems from '../../components/EventItems';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile';
// ========================================================================================

describe('<EventItems />', () => {
  it('renders correctly', () => {
    const eventWithId = { ...basicEvent, id: 123 };
    const events = [{...eventWithId}, {...eventWithId}, {...eventWithId}];
    const component = shallow(
      <EventItems
        events={events}
        history={jest.fn()}
        deleteEvent={jest.fn()}
      />
    )

    // TODO: below component returning undefined
    // console.log('COMP', component.debug())
    // expect(component).toMatchSnapshot();
  });


  it('renders correct number of events', () => {

  });

});
