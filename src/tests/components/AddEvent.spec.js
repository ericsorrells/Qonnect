// ========================================================================================
import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import 'jest-enzyme';
// ========================================================================================
import AddEvent from '../../containers/AddEvent_Container';
import  { AddEventComponent } from '../../components/AddEvent';
// import AddEvent from '../../components/AddEvent';
import EventItems from '../../components/EventItems';
import EventItem from '../../components/EventItem';
import EventForm from '../../components/EventForm';
// ========================================================================================
import { startCreateEvent } from '../../actions/Events_Actions'
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile';
import storeComplete from '../stubs/store_complete.json';
import storeNoEvents from '../stubs/store_no-events.json';
import 'react-dates/initialize';
import { startGetProfile } from '../../actions/Profile_Actions';
// ========================================================================================

// TODO TEST: this isn't working at all
describe('<AddEvent />', () => {
    const component = mockStoreSetup(AddEvent, storeComplete);
    // console.log('COMP', component.debug())

// console.log('STORE', storeComplete)

  // const mockComponent = mockStoreSetup(storeComplete);
  // console.log('MOCK STORE', mockComponent.debug());


  // let componentWithEvents, componentWithoutEvents;
  const eventWithId = { ...basicEvent, id: 123 }
  const events = [{ ...eventWithId }, { ...eventWithId }, { ...eventWithId }];
  // beforeEach(() => {
    //TODO TEST: component seems to be calling <Search />, which is failing
    const componentWithEvents = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
          <AddEvent
            events={events}
            userId={'abc123'}
            profile={basicProfile}
            auth={{ uid: 'abc123' }}
            loading={false}
          />
        </MemoryRouter>
      </Provider>
    )

    // componentWithoutEvents = mount(
    //   <Provider store={store}>
    //     <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
    //       <AddEvent
    //         events={null}
    //         userId={'abc123'}
    //         profile={basicProfile}
    //         auth={{ uid: 'abc123' }}
    //         loading={false}
    //       />
    //     </MemoryRouter>
    //   </Provider>
    // )
  // });

  describe('rendering', () => {
    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });

    it('renders all child components', () => {
      expect(component.containsAllMatchingElements([
        <EventForm />,
        <EventItems />
      ])).toBeTruthy()
    });

    it('doesnt render <EventItems /> if no events', () => {
      const componentNoEvents = { ...storeComplete, events: {} }
      const component = mockStoreSetup(AddEvent, componentNoEvents);
      expect(component.find(EventItem).first()).not.toExist();
    });
  })

  describe('componentDidMount()', () => {
    const startGetProfile = jest.fn();
    const storeNoEvents = { ...storeComplete, events: {} }
    const component = mockStoreSetup(AddEvent, storeNoEvents);

    it('loads user profile if no events', () => {
      // component.prop('componentDidMount')({ userId: 'NClNDy4YHLMdy7ILKcQGcHpI4OD3' });
      // expect(startGetProfile).toHaveBeenLastCalledWith({
      //   userId: 'NClNDy4YHLMdy7ILKcQGcHpI4OD3'
      // });
    });

    it('loads user profile if no user events', () => {

    });

    it('wont load user profile if events', () => {

    });
  });

  describe('handleSubmit()', () => {
    it.only('calls startCreateEvent()', () => {
      const component = mount(
        <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
        <AddEventComponent
          events={[basicEvent]}
          history={jest.fn()}
          deleteEvent={jest.fn()}
          onSubmit={jest.fn()}
          profile={basicProfile}
          auth={ { uid: 'xyc734' } }
        />
        </MemoryRouter>
      )
      console.log('ADD EVENT COMP', component.debug())

      const startCreateEvent = jest.fn();
      // component.find('EventForm').prop('onSubmit')({ event: basicEvent });
      component.find('button').simulate('click');
      expect(startCreateEvent).toHaveBeenCalled()
    });
  });
});