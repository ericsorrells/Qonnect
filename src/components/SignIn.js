// ========================================================================================
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startSignIn } from '../actions/Auth';
// ========================================================================================
import { SignUpLink } from './SignUp';
// ========================================================================================

const SignIn = (props) => {
  return (
    <div className='profile_form sign-in-margins'>
      <h1>Sign In</h1>
      <SignInForm history={props.history} startSignIn={props.startSignIn} />
      <SignUpLink />
    </div>
  )
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    this.props.startSignIn({ ...this.state });
    e.preventDefault();
  }

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';
    console.log('STATE', email, password, isInvalid)

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type='text'
          placeholder='Email Address'
          className='form__element_border form__input'
          id='emailInput'
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type='password'
          placeholder='Password'
          className='form__element_border form__input'
          id='passwordInput'
        />
        <button disabled={isInvalid} type='submit' className='button__purple'>
          Sign In
        </button>

        {error && <p className='error'>{error.message}</p>}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { startSignIn: (authInfo) => dispatch(startSignIn(authInfo)) }
}

SignIn.propTypes = {
  startSignIn: PropTypes.func,
  history:     PropTypes.func
}

export { SignIn, SignInForm };
export default connect(null, mapDispatchToProps)(SignIn)
