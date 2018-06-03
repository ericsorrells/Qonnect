// ========================================================================================
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import { Profile, EventsHeader } from '../../components/Profile';
import UserStats from '../../components/UserStats';
import UserInfo from '../../components/UserInfo';
import EventItems from '../../components/EventItems';
import Spinner from '../../components/Spinner';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile';
import storeComplete from '../stubs/store_complete.json'
import { start } from 'repl';
// ========================================================================================

describe('<Profile />', () => {
  let component, startGetProfile, deleteEvent, history;
  const eventWithId = { ...basicEvent, id: 123 };
  const events = [{ ...eventWithId }, { ...eventWithId }, { ...eventWithId }];

  beforeEach(() => {
    startGetProfile = jest.fn();
    deleteEvent = jest.fn();
    component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
          <Profile
            events={events}
            profile={basicProfile}
            userId={basicEvent.uid}
            urlParam={basicEvent.uid}
            loading={{ loading: false }}
            startGetProfile={startGetProfile}
            deleteEvent={deleteEvent}
            match={{ params: { id: basicEvent.id } }}
          />
        </MemoryRouter>
      </Provider>
    );
  });

  describe('rendering', () => {
    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });

    it('contains the correct child elements', () => {
      expect(component.containsAllMatchingElements([
        <UserStats />,
        <UserInfo />,
        <EventsHeader />,
        <EventItems />
      ])).toBeTruthy();
    });
  });

  it('handles loading correctly', () => {
    const loadingComponent = shallow(
      <Profile
        events={events}
        profile={basicProfile}
        userId={basicEvent.uid}
        urlParam={basicEvent.uid}
        loading={{ loading: true }}
        startGetProfile={jest.fn()}
        deleteEvent={jest.fn()}
        match={{ params: { id: basicEvent.id } }}
      />
    );
    expect(loadingComponent).toContainReact(<Spinner />);
  });

  it('loads user profile in componentDidMount()', () => {
    // calls startGetProfile when component loads in the life cycle
    expect(startGetProfile).toHaveBeenCalled();
  });

  describe('componentWillUnmount()', () => {
    it('load user profile if userId doesnt match ID in URL', () => {
      const spy = jest.spyOn(Profile.prototype, 'componentWillUnmount');
      component.unmount()
      expect(spy).toHaveBeenCalled();
      expect(startGetProfile).toHaveBeenCalledTimes(2); // also called in componentDidMount()
      spy.mockReset();
      spy.mockRestore();
    });

    it('will not load user if userId matches ID in URL', () => {
      component.setProps({ userId: basicEvent.id })
      const startGetProfile = jest.fn();
      const spy = jest.spyOn(Profile.prototype, 'componentWillUnmount');
      component.unmount()
      expect(spy).toHaveBeenCalled();
      expect(startGetProfile).not.toHaveBeenCalled()
      spy.mockReset();
      spy.mockRestore();
    });
  });

  it('allows you to navigate to Create Event', () => {
    const historyMock = { push: jest.fn() };
    const component = shallow(<EventsHeader history={historyMock}/>)
    const button = component.find('.events-header__button');
    button.simulate('click')

    expect(historyMock.push).toHaveBeenLastCalledWith('/add-event/');
  });
});