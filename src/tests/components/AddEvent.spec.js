// ========================================================================================
import React, { Component } from 'react';
import { shallow, mount }   from 'enzyme';
import { MemoryRouter }     from 'react-router-dom';
import { Provider }         from 'react-redux';
import store                from '../../store/configureStore';
import 'jest-enzyme';
// ========================================================================================
import { AddEvent } from '../../components/AddEvent';
import Spinner      from '../../components/Spinner';
import EventItems   from '../../components/EventItems';
import EventItem    from '../../components/EventItem';
import EventForm    from '../../components/EventForm';
// ========================================================================================
import { startCreateEvent } from '../../actions/Events_Actions'
import { basicEvent }       from '../stubs/event';
import { basicProfile }     from '../stubs/profile';
import storeComplete        from '../stubs/store_complete.json';
import storeNoEvents        from '../stubs/store_no-events.json';
import { startGetProfile }  from '../../actions/Profile_Actions';
import 'react-dates/initialize';
// ========================================================================================

describe('<AddEvent />', () => {

  let componentWithEvents, startGetProfileMock;
  startGetProfileMock = jest.fn();
  beforeEach(() => {
    const eventWithId = { ...basicEvent, id: 123 }
    const events = [{ ...eventWithId }, { ...eventWithId }, { ...eventWithId }];
    componentWithEvents = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
          <AddEvent
            events={events}
            userId={'abc123'}
            profile={basicProfile}
            auth={{ uid: 'abc123' }}
            loading={false}
            startGetProfile={startGetProfileMock}
          />
        </MemoryRouter>
      </Provider>
    )
  });

  describe('rendering', () => {
    it('renders correctly', () => {
      expect(componentWithEvents.find('aside')).toExist();
      expect(componentWithEvents.find('section')).toExist();
      expect(componentWithEvents.containsAllMatchingElements([
        <EventForm />,
        <EventItems />
      ])).toBeTruthy();
    });

    it('doesnt render <EventItems /> if no events', () => {
      const componentWithoutEvents = mount(
        <AddEvent
          userId={'abc123'}
          events={[]}
          profile={basicProfile}
          auth={{ uid: 'abc123' }}
          loading={false}
          history={jest.fn()}
          deleteEvent={jest.fn()}
          startGetProfile={startGetProfileMock}
        />
      )
      expect(componentWithoutEvents.find(EventItem).first()).not.toExist();
    });

    it('handles Loading', () => {
      const component = mount(
        <AddEvent
          userId={'abc123'}
          events={[]}
          profile={basicProfile}
          auth={{ uid: 'abc123' }}
          loading={ { loading: true } }
          history={jest.fn()}
          deleteEvent={jest.fn()}
          startGetProfile={startGetProfileMock}
        />
      )

      expect(component.find('Spinner')).toExist();
    });
  })

  describe('componentDidMount()', () => {
    const eventWithId = { ...basicEvent, id: 123 }
    const events = [{ ...eventWithId }, { ...eventWithId }, { ...eventWithId }];

    it('loads user profile if no events', () => {
      const componentWithoutEvents = mount(
        <AddEvent
          userId={'abc123'}
          events={[]}
          profile={basicProfile}
          auth={{ uid: 'abc123' }}
          loading={false}
          history={jest.fn()}
          deleteEvent={jest.fn()}
          startGetProfile={startGetProfileMock}
        />
      )

      expect(startGetProfileMock).toHaveBeenLastCalledWith('abc123');
    });

    it('loads user profile if no user events', () => {
      const componentWithoutUserEvents = mount(
        <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
          <AddEvent
            userId={'xyz789'}
            events={events}
            profile={basicProfile}
            auth={{ uid: 'xyz789' }}
            loading={false}
            history={jest.fn()}
            deleteEvent={jest.fn()}
            startGetProfile={startGetProfileMock}
          />
        </MemoryRouter>
      )

      expect(startGetProfileMock).toHaveBeenCalled();
    });

    it('wont load user profile if events', () => {
      const componentWithoutEvents = mount(
        <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
          <AddEvent
            userId={'abc123'}
            events={events}
            profile={basicProfile}
            auth={{ uid: 'abc123' }}
            loading={false}
            history={jest.fn()}
            deleteEvent={jest.fn()}
            startGetProfile={startGetProfileMock}
          />
        </MemoryRouter>
      )

      expect(startGetProfileMock).not.toHaveBeenLastCalledWith('abc123');
    });
  });

  describe('handleSubmit()', () => {
    it('calls startCreateEvent()', () => {
      const startCreateEventMock = jest.fn();
      const component = mount(
        <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
          <AddEvent
            events={[basicEvent]}
            history={jest.fn()}
            deleteEvent={jest.fn()}
            onSubmit={jest.fn()}
            profile={basicProfile}
            auth={{ uid: 'xyc734' }}
            startCreateEvent={startCreateEventMock}
            loading={ { loading: false } }
          />
        </MemoryRouter>
      )

      component.find('form').simulate('submit', {
        preventDefault: () => { }
      });
      expect(startCreateEventMock).toHaveBeenCalled()
    });
  });
});