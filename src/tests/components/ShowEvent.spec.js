// ========================================================================================
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import store from '../../store/configureStore';
import { Provider }                  from 'react-redux';
import 'jest-enzyme';
// ========================================================================================
import { ShowEvent, Menu } from '../../components/ShowEvent';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile';
import { basicAcceptance, selectedAcceptance } from '../stubs/acceptance';
import ShowEventDisplay from '../../components/ShowEventDisplay';
import { userAcceptEvent } from '../../sagas/acceptancesSaga';
// ========================================================================================

describe('<ShowEvent/>', () => {
  const acceptances = [{ ...basicAcceptance }, { ...basicAcceptance }, { ...basicAcceptance }];
  const acceptancesWithSelection = [{ ...basicAcceptance }, { ...basicAcceptance }, { ...basicAcceptance }, {...selectedAcceptance}]
  let componentWithEventOwner;
  let startDeleteEvent, createUserAcceptedEventInFirebase, startGettingEventAcceptances, startUserAcceptEvent, historyMock;
  startGettingEventAcceptances      = jest.fn();
  startDeleteEvent                  = jest.fn();
  createUserAcceptedEventInFirebase = jest.fn();
  startUserAcceptEvent              = jest.fn();
  historyMock                       = { push: jest.fn() };

  sessionStorage.setItem('qProfile', JSON.stringify({uid:'abc123'}))

  beforeEach(() => {
    componentWithEventOwner = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
          <ShowEvent
            event={basicEvent}
            eventId={basicEvent.id}
            acceptances={acceptances}
            user={basicProfile}
            userId={basicEvent.uid}
            startDeleteEvent={startDeleteEvent}
            createUserAcceptedEventInFirebase={createUserAcceptedEventInFirebase}
            startGettingEventAcceptances={startGettingEventAcceptances}
            startUserAcceptEvent={startUserAcceptEvent}
            history={historyMock}
            match={{ params: { id: basicEvent.uid } }}
          />
        </MemoryRouter>
      </Provider>
    )
  })


  describe('rendering', () => {

    it('renders correctly for event owner', () => {
      expect(componentWithEventOwner.find('Menu')).toExist();
      expect(componentWithEventOwner.find('ShowEventDisplay')).toExist();
      expect(componentWithEventOwner.find('AcceptInvitationButton')).toExist();
    });

    it('renders correctly for non-event owner', () => {
      const newEvent = { ...basicEvent, uid: 'xyz123'};
      const componentWithoutEventOwner = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
            <ShowEvent
              event={newEvent}
              eventId={newEvent.id}
              acceptances={acceptances}
              user={basicProfile}
              userId={'xyz789'}
              startDeleteEvent={startDeleteEvent}
              createUserAcceptedEventInFirebase={createUserAcceptedEventInFirebase}
              startGettingEventAcceptances={startGettingEventAcceptances}
              startUserAcceptEvent={startUserAcceptEvent}
            />
          </MemoryRouter>
        </Provider>
      );
      expect(componentWithoutEventOwner.find('AcceptInvitationButton')).toExist();
      expect(componentWithoutEventOwner.find('.show-event__menu')).not.toExist();
    });

    it('shows Selected Event', () => {
      const componentWithEventOwner = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
            <ShowEvent
              event={basicEvent}
              eventId={basicEvent.id}
              acceptances={acceptancesWithSelection}
              user={basicProfile}
              userId={basicEvent.uid}
              startDeleteEvent={startDeleteEvent}
              createUserAcceptedEventInFirebase={createUserAcceptedEventInFirebase}
              startGettingEventAcceptances={startGettingEventAcceptances}
              startUserAcceptEvent={startUserAcceptEvent}
              history={historyMock}
              match={{ params: { id: basicEvent.uid } }}
            />
          </MemoryRouter>
        </Provider>
      )
      expect(componentWithEventOwner.find('.show-event__selected-acceptance')).toExist();
    });

    it('show all Acceptances', () => {
      expect(componentWithEventOwner.find('.show-event__unselected-acceptances').children().length).toEqual(3);
    });
  });

  describe('Modal', () => {
    let component;
    const newEvent = {...basicEvent, uid: 'xyz123'};

    beforeEach(() => {
      component = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
            <ShowEvent
              event={newEvent}
              eventId={newEvent.id}
              acceptances={acceptances}
              user={basicProfile}
              userId={newEvent.uid}
              startDeleteEvent={startDeleteEvent}
              createUserAcceptedEventInFirebase={createUserAcceptedEventInFirebase}
              startGettingEventAcceptances={startGettingEventAcceptances}
              startUserAcceptEvent={startUserAcceptEvent}
            />
          </MemoryRouter>
        </Provider>
      );
    })

    it('button opens modal', () => {
      component.find('button').simulate('click');
      expect(component.find('AcceptanceModal')).toHaveProp('modalOpen', true);
    });

    it('closes modal', () => {
      component.find('button').simulate('click');
      expect(component.find('AcceptanceModal')).toHaveProp('modalOpen', true);
      component.find('form').simulate('submit', {
        preventDefault: () => { }
      });
      expect(component.find('AcceptanceModal')).toHaveProp('modalOpen', false);
    });

    it('calls userAcceptEvent()', () => {
      component.find('button').simulate('click');
      expect(component.find('AcceptanceModal')).toHaveProp('modalOpen', true);
      component.find('form').simulate('submit', {
        preventDefault: () => { }
      });
      expect(startUserAcceptEvent).toHaveBeenCalled();
    });
  });

  describe('Menu', () => {
    // basicEvent.uid = 'abc123';

    it('allows user to delete an event', () => {
      const spy = jest.spyOn(ShowEvent.prototype, 'onDelete');
      componentWithEventOwner.find('#show-event__delete-button').simulate('click');
      expect(startDeleteEvent).toHaveBeenCalled();
      spy.mockReset();
      spy.mockRestore();
    });

    it('allows user to edit an event', () => {
      const spy = jest.spyOn(ShowEvent.prototype, 'onEdit');
      componentWithEventOwner.find('#show-event__edit-button').simulate('click');
      expect(historyMock.push).toHaveBeenCalledWith(`/edit-event/${basicEvent.id}`);
      spy.mockReset();
      spy.mockRestore();
    });
  });
});