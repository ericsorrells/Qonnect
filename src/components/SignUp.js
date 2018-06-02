// ========================================================================================
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../firebase/firebaseIndex';
import { doSignUp, signIn } from '../actions/Auth';
import { updateProfile } from '../actions/Profile_Actions';
// ========================================================================================

const SignUp = ({ history, signIn, updateProfile }) => {
  return (
    <div className='profile_form sign-in-margins'>
      <h1>Sign Up</h1>
      <SignUpForm
        history={history}
        doSignUp={doSignUp}
        signIn={signIn}
        updateProfile={updateProfile}
      />
    </div>
  )
}

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, passwordOne } = this.state;
    // TODO: WHY DOES THIS NOT WORK???
    // create signUp saga?
    // this.props.doSignUp(dispatch, email, passwordOne)

    return auth.doCreateUserWithEmailAndPasswor(email, passwordOne)
      .then((user) => {
        // this.props.signIn(user)    COMMENTED TO TEST FOR 'SIGN_IN' ACTION FIRINGS
        this.props.updateProfile({email: email})
        this.props.history.push('/update-profile')
      })
      .catch((error) => {
        console.error('ERROR SIGNING UP: ', error)
        this.setState({ error: error })
      });
  }

  render() {
    const { email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === ''

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
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type='password'
          placeholder='Password'
          className='form__element_border form__input'
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type='password'
          placeholder='Confirm Password'
          className='form__element_border form__input'
        />
        <button disabled={isInvalid} type='submit'  className='button__purple'>
          Sign Up
        </button>
        {error && <p className='error'>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={'/signup'}>Sign Up</Link>
  </p>

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(signIn(user.uid)),
    updateProfile: (profileUpdates) => dispatch(updateProfile(profileUpdates))
  }
}

SignUp.propTypes = {
  signIn:        PropTypes.func,
  updateProfile: PropTypes.func,
  history:       PropTypes.func
}

export { SignUpForm, SignUpLink };
export default connect(null, mapDispatchToProps)(SignUp);
