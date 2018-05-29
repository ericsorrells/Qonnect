// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// ========================================================================================
import PasswordChange from './PasswordChange';
// ========================================================================================

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    const { user = null, profile: userProfile = null } = this.props;

    this.state = {
      displayName:    userProfile.displayName ? userProfile.displayName : '',
      firstName:      userProfile.firstName   ? userProfile.firstName   : '',
      lastName:       userProfile.lastName    ? userProfile.lastName    : '',
      email:          userProfile.email       ? userProfile.email       : '',
      photoURL:       userProfile.photoURL    ? user.photoURL           : '',
      city:           userProfile.city        ? userProfile.city        : '',
      state:          userProfile.state       ? userProfile.state       : '',
      birthDate:      userProfile.birthDate   ? userProfile.birthDate   : '',
      description:    userProfile.description ? userProfile.description : '',
      createdAt:      userProfile.createdAt   || moment.now(),
      updatedAt:      moment.now(),
      passwordOne:    '',
      passwordTwo:    '',
      error:          null
    }

    this.handleDisplayName          = this.handleDisplayName.bind(this);
    this.handleFirstNameChange      = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange       = this.handleLastNameChange.bind(this);
    this.handleEmailChange          = this.handleEmailChange.bind(this);
    this.handlePhotoURLChange       = this.handlePhotoURLChange.bind(this);
    this.handleCityChange           = this.handleCityChange.bind(this);
    this.handleStateChange          = this.handleStateChange.bind(this);
    this.handleBirthdateChange      = this.handleBirthdateChange.bind(this);
    this.handleDescriptionChange    = this.handleDescriptionChange.bind(this);
    this.handlePasswordChange       = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmation = this.handlePasswordConfirmation.bind(this);
    this.onFormSubmit               = this.onFormSubmit.bind(this);
  }

  handleDisplayName(e) {
    this.setState({ displayName: e.target.value })
  }

  handleFirstNameChange(e) {
    this.setState({ firstName: e.target.value })
  }

  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value })
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePhotoURLChange(e) {
    this.setState({ photoURL: e.target.value })
  }

  handleCityChange(e) {
    this.setState({ city: e.target.value })
  }

  handleStateChange(e) {
    this.setState({ state: e.target.value })
  }

  handleBirthdateChange(e) {
    this.setState({ birthDate: e.target.value })
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value })
  }

  handlePasswordChange(e) {
    if(e.target.value) {
      this.setState({ passwordOne: e.target.value })
    }
  }

  handlePasswordConfirmation(e) {
    if(e.target.value) {
      this.setState({ passwordTwo: e.target.value })
    }
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.handleSubmit({...this.state});
  }

  render() {
    const { passwordOne, passwordTwo } = this.state;
    const isInvalid = passwordOne !== passwordTwo;

    return (
      <form onSubmit={this.onFormSubmit} className='profile_form'>
        <h3 className='profile_form--header'>Update Your Profile Information:</h3>
        <label>User Name:</label>
        <input 
          type='text' 
          onChange={this.handleDisplayName} 
          value={this.state.displayName}
          className='form__element_border form__input'
        />

        <label>First Name:</label>
        <input 
          type='input' 
          onChange={this.handleFirstNameChange} 
          value={this.state.firstName}
          className='form__element_border form__input'
        />

        <label>Last Name:</label>
        <input 
          type='input' 
          onChange={this.handleLastNameChange} 
          value={this.state.lastName}
          className='form__element_border form__input'
        />

        <label>Email:</label>
        <input 
          type='input' 
          onChange={this.handleEmailChange} 
          value={this.state.email}
          className='form__element_border form__input'
        />

        <label>Photo URL:</label>
        <input 
          type='input' 
          onChange={this.handlePhotoURLChange} 
          value={this.state.photoURL}
          className='form__element_border form__input'  
        />

        <label>City:</label>
        <input 
          type='input' 
          onChange={this.handleCityChange} 
          value={this.state.city}
          className='form__element_border form__input'
        />

        <label>State:</label>
        <input 
          type='input' 
          onChange={this.handleStateChange} 
          value={this.state.state}
          className='form__element_border form__input'
        />

        <label>Birthday:</label>
        <input 
          type='date' 
          onChange={this.handleBirthdateChange} 
          value={this.state.birthDate}
          className='form__element_border form__input'
        />

        <label>Personal Description:</label>
        <input
          type='textarea'
          onChange={this.handleDescriptionChange}
          placeholder='Tell Us About Yourself'
          value={this.state.description}
          className='form__element_border form__input'
        />

        <label>New Password:</label>
        <input
          value={this.state.passwordOne}
          onChange={this.handlePasswordChange}
          type='password'
          placeholder='New Password'
          className='form__element_border form__input'
        />

        <label>Reenter New Password:</label>
        <input
          value={this.state.passwordTwo}
          onChange={this.handlePasswordConfirmation}
          type='password'
          placeholder='Confirm New Password'
          className='form__element_border form__input'
        />
        {/*<button disabled={isInvalid} type="submit">*/}
        <button type='submit' className='button__purple'>
          Submit
        </button>
      </form>
    )
  }
}

ProfileForm.propTypes = {
  user:    PropTypes.object,
  profile: PropTypes.object
}

export default ProfileForm;