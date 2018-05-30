// ========================================================================================
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import 'jest-enzyme';
// ========================================================================================
import EventItems from '../../components/EventItems';
import EventItem from '../../components/EventItem';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile';
// ========================================================================================

describe('<EventItems />', () => {
  const eventWithId = { ...basicEvent, id: 123 };
  const events = [{ ...eventWithId }, { ...eventWithId }, { ...eventWithId }];
  const component = mount(
    <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
      <EventItems
        events={events}
        history={jest.fn()}
        deleteEvent={jest.fn()}
      />
    </MemoryRouter>
  )

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correct number of events', () => {
    expect(component.find('.event-item__ul').children().length).toBe(3);
  });
});
