// ========================================================================================
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import 'jest-enzyme';
// ========================================================================================
import EventItem, { Image } from '../../components/EventItem';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<EventItem />', () => {
  it('renders correctly with a valid event', () => {
    const component = shallow(
      <EventItem
        {...basicEvent}
        key={basicEvent.id}
        history={jest.fn()}
        deleteEvent={jest.fn()}
      />
    )

    expect(component).toMatchSnapshot();
  });

  it('renders default image when no imageURL provided', () => {
    const newEvent = { ...basicProfile, imageUrl: '' }
    const component = mount(
      <MemoryRouter>
        <Image Link={MemoryRouter} id={'abc123'} imageUrl={null} />
      </MemoryRouter>
    )

    expect(component.find('.event-item__image')).toHaveProp('src', '/images/default.png');
  });
});
