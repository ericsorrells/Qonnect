// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
// ========================================================================================
import AcceptanceModal from '../../components/AcceptanceModal';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<AcceptanceModal />', () => {
  let component, userAcceptEvent;
  beforeEach(() => {
    userAcceptEvent = jest.fn();
    component = shallow(
      <AcceptanceModal
        modalOpen={true}
        closeModal={jest.fn()}
        userAcceptEvent={userAcceptEvent}
        event={basicEvent}
      />
    )
  });

  describe('rendering', () => {
    it('renders initial state correctly', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('handles data entry correctly', () => {
    it('has the correct inital state values', () => {
      expect(component.state('acceptanceNote')).toBe('')
    });

    it('allow user to enter an acceptance message', () => {
      const value = 'Id like to go to this event';
      component.find('.modal__textarea').simulate('change', { target: { value } });
      expect(component.state('acceptanceNote')).toBe(value)
    });

    it('allows user to accept an event', () => {
      const value = 'Id like to go to this event';
      component.find('.modal__textarea').simulate('change', { target: { value } });

      component.find('form').simulate('submit', {
        preventDefault: () => { }
      });

      expect(userAcceptEvent).toHaveBeenLastCalledWith({
        acceptanceNote: value
      });
    });
  });
});
