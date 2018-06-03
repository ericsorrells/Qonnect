// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import { FindEvents } from '../../components/FindEvents';
import Search from '../../components/Search';
import EventItems from '../../components/EventItems';
import Spinner from '../../components/Spinner';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<FindEvents/>', () => {
  const eventWithId = { ...basicEvent, id: 123 };
  const events = [{ ...eventWithId }, { ...eventWithId }, { ...eventWithId }];
  let component, historyMock, deleteEventMock, startGetProfileMock, startGetOtherEventsMock;

  beforeEach(() => {
    historyMock = { push: jest.fn() };
    deleteEventMock = jest.fn();
    startGetProfileMock = jest.fn();
    startGetOtherEventsMock = jest.fn();

    sessionStorage.setItem('qProfile', JSON.stringify('someProfile'));

    component = shallow(
      <FindEvents
        events={events}
        loading={{ loading: false }}
        userId={eventWithId.id}
        match={{ params: { id: eventWithId.id } }}
        history={historyMock}
        deleteEvent={deleteEventMock}
        startGetProfile={startGetProfileMock}
        startGetOtherEvents={startGetOtherEventsMock}
      />
    )
  })

  it('renders correctly', () => {
    expect(component.containsAllMatchingElements([
      <Search />,
      <EventItems />
    ]));
  });

  it('handles loading correctly', () => {
    const loadingComponent = shallow(
      <FindEvents
        loading={{ loading: true }}
        startGetOtherEvents={startGetOtherEventsMock}
      />
    )

    expect(component.containsAllMatchingElements([
      <Spinner />
    ]));
  });

  it('componentDidMount() calls startGetOtherEvents()', () => {
    expect(startGetOtherEventsMock).toHaveBeenCalled();
  });

  describe('componentDidUnmount()', () => {
    it('calls startGetProfile() when userId doesnt match URL param', () => {
      component.setProps({ userId: 'xyz' });
      component = shallow(
      <FindEvents
        events={events}
        loading={{ loading: false }}
        userId={'xyz'}
        match={{ params: { id: eventWithId.id } }}
        history={historyMock}
        deleteEvent={deleteEventMock}
        startGetProfile={startGetProfileMock}
        startGetOtherEvents={startGetOtherEventsMock}
      />
    )
      component.unmount();
      const spy = jest.spyOn(FindEvents.prototype, 'componentWillUnmount');
      expect(startGetProfileMock).toHaveBeenCalledTimes(1);
      spy.mockReset();
      spy.mockRestore();
    });

    it('doesnt call startGetProfile() when userId does match URL param', () => {
      component.unmount();
      const spy = jest.spyOn(FindEvents.prototype, 'componentWillUnmount');
      expect(startGetProfileMock).toHaveBeenCalledTimes(0);
      spy.mockReset();
      spy.mockRestore();
    });
  });
});
