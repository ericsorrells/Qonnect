// ========================================================================================
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startSignIn } from '../actions/Auth';
// ========================================================================================
import { SignUpLink } from './SignUp';
import ProfileForm from './ProfileForm';
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
    e.preventDefault();
    this.props.startSignIn({ ...this.state });
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type='text'
          placeholder='Email Address'
          className='form__element_border form__input'
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type='password'
          placeholder='Password'
          className='form__element_border form__input'
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

export default connect(null, mapDispatchToProps)(SignIn)
export { SignInForm };