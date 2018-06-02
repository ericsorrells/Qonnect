
// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import { ShowAcceptance } from '../../components/ShowAcceptance';
// ========================================================================================
import { basicAcceptance } from '../stubs/acceptance';
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile';
// ========================================================================================

describe('<ShowAcceptance/>', () => {
  const startOwnerSelectsGuest = jest.fn();
  const eventId = '-LDTTYL9PSqqroO6JLYh';

  const component = shallow(
    <ShowAcceptance
      acceptance={basicAcceptance}
      eventId={eventId}
      userId={basicEvent.uid}
      event={basicEvent}
      user={basicProfile}
      startOwnerSelectsGuest={startOwnerSelectsGuest}
    />
  )

  describe('rendering', () => {
    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
      expect(component.find('.show-acc__name')).toExist();
      expect(component.find('.show-acc__note')).toHaveText(basicAcceptance.acceptanceNote);
      expect(component.find('.fa-thumbs-up')).toExist();
    });
  });

  it('allows event owner to select a guest', () => {
    component.find('a').simulate('click');
    expect(startOwnerSelectsGuest).toHaveBeenCalled();
  });

  it('prevents non-event owners from selecting a guest', () => {
    const acceptanceAlreadyMade = { ...basicAcceptance, selected: true};
    component.setProps({ acceptance: acceptanceAlreadyMade });
    expect(component.find('a')).not.toExist();
  });
});