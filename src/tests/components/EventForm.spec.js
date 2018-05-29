// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import moment from 'moment';
// ========================================================================================
import EditEvent from '../../components/EditEvent';
import EventForm from '../../components/EventForm';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<EventForm />', () => {
  describe('rendering', () => {
    it('renders the correct initial state', () => {
      const component = shallow(<EventForm />)
      expect(component).toMatchSnapshot();
    });

    it('renders correctly with data', () => {
      const component = shallow(<EventForm event={basicEvent} onSubmit={jest.fn()} />)
      expect(component).toMatchSnapshot();
    });
  });

  describe('state', () => {
    let component;
    beforeEach(() => {
      component = shallow(<EventForm />);
    })

    it('has the correct initial state', () => {
      expect(component.state('eventName')).toBe('');
      expect(component.state('date')).toBe('');
      expect(component.state('time')).toBe('');
      expect(component.state('category')).toBe('');
      expect(component.state('imageUrl')).toBe('');
      expect(component.state('description')).toBe('');
      expect(component.state('focused')).toBe(undefined);
    });

    it('updates eventName correctly', () => {
      const value = 'New Description';
      component.find('#eventNameInput').simulate('change', { target: { value } });
      expect(component.state('eventName')).toBe(value);
    });

    it('updates date correctly', () => {
      const now = moment();
      component.find('#datePicker').prop('onDateChange')(now);
      expect(component.state('date')).toEqual(now);
    });

    it('updates time correctly', () => {
      const value = '12:59 PM';
      component.find('#timeInput').simulate('change', { target: { value } });
      expect(component.state('time')).toBe(value)
    });

    it('updates location correctly', () => {
      const value = '524 Bryn Mawr Ln';
      component.find('#locationInput').simulate('change', { target: { value } });
      expect(component.state('location')).toBe(value);
    });

    it('updates category correctly', () => {
      const value = 'Music';
      component.find('#categoryInput').simulate('change', { target: { value } });
      expect(component.state('category')).toBe(value);
    });

    it('updates imageUrl correctly', () => {
      const value = 'https://myImage.com';
      component.find('#imageUrlInput').simulate('change', { target: { value } });
      expect(component.state('imageUrl')).toBe(value);
    });

    it('updates description correctly', () => {
      const value = 'This will be a fun event!';
      component.find('#descriptionInput').simulate('change', { target: { value } });
      expect(component.state('description')).toBe(value);
    });

    it('updates calendar focus correctly', () => {
      component.find('#datePicker').prop('onFocusChange')({ focused: true });
      expect(component.state('focused')).toBe(true);
    });
  });

  it('handles onFormSubmit()', () => {
    const onSubmitSpy = jest.fn();
    const component = shallow(
      <EventForm
        event={basicEvent}
        onSubmit={onSubmitSpy}
        profile={basicProfile}
        auth={ { uid: '123abc' } }
      />
    )

    component.find('form').simulate('submit', {
      preventDefault: () => { }
    });

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      userName:          `${basicProfile.firstName} ${basicProfile.lastName}`,
      uid:               '123abc',
      eventName:         basicEvent.eventName,
      date:              moment(basicEvent.date).valueOf(),
      time:              basicEvent.time,
      location:          basicEvent.location,
      category:          basicEvent.category,
      imageUrl:          basicEvent.imageUrl,
      description:       basicEvent.description,
      selectedUser:      'none',
      interestedUsers:   'none',
      uninterestedUsers: 'none',
    });
  });
});