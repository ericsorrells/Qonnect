// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import EventItemAcceptances from '../../components/EventItem_Acceptances';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<EventItemAcceptances/>', () => {
  it('renders correctly', () => {
    const component = shallow( <EventItemAcceptances acceptances={4} /> );
    expect(component.find('.acceptance__count')).toHaveHTML(
      '<div class="acceptance__count">4</div>'
    );
  });
});