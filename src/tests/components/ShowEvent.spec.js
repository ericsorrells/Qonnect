// ========================================================================================
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import ShowEvent from '../../components/ShowEvent';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile';
import { basicAcceptance } from '../stubs/acceptance';
// ========================================================================================

// TODO TEST: failing bc firebase getCurrentUser() can't get something from sessionStorage
xdescribe('<ShowEvent/>', () => {
  const acceptances = [{ ...basicAcceptance }, { ...basicAcceptance }, { ...basicAcceptance }];
  const startDeleteEvent                  = jest.fn();
  const createUserAcceptedEventInFirebase = jest.fn();
  const startGettingEventAcceptances      = jest.fn();
  const startUserAcceptEvent              = jest.fn();

  const component = shallow(
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
      />
    </MemoryRouter>
  )
  describe('rendering', () => {
    it('renders correctly for event owner', () => {
      console.log('SE COME', component.debug())
      expect(component.find('Menu')).toExist();
      // contains Menu, ShowEventDisplay, AcceptInvitationButton, AcceptModal
    });

    it('renders correctly for non-event owner', () => {

    });

    it('shows Selected Event', () => {

    });

    it('show all Acceptances', () => {

    });
  });

  describe('Modal', () => {
    it('opens modal', () => {

    });

    it('closes modal', () => {

    });
  });

  describe('Events', () => {
    it('allows user to delete an event', () => {

    });

    it('allows user to edit an event', () => {

    });
  });

  describe('userAcceptEvent()', () => {
    it('calls startUserAcceptEvent()', () => {

    });

    it('opens the modal', () => {

    });
  });
});