// ========================================================================================
import React, { Component } from 'react';
import { auth } from '../firebase/firebaseIndex';
import { doPasswordUpdate } from '../firebase/auth';
// ========================================================================================

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordOne: '',
      passwordTwo: '',
      error: null
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { passwordOne } = this.state;

    doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({
          passwordOne: '',
          passwordTwo: '',
          error: null
        }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type='password'
          placeholder="New Password"
          id='passwordOne'
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type='password'
          placeholder='Confirm New Password'
          id='passwordTwo'
        />
        <button disabled={isInvalid} type='submit' id='passwordSubmitButton'>
          Reset My Password
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default PasswordChangeForm;
