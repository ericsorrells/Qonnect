// ========================================================================================
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { doSignIn } from '../actions/Auth';
// ========================================================================================
import { SignUpLink } from './SignUp';
import { auth } from '../firebase/firebaseIndex';
// ========================================================================================

const SignIn = (props) => {
  return(
    <div>
    <h1>SignIn</h1>
    <SignInForm history={props.history} doSignIn={props.doSignIn}/>
    <SignUpLink />
    </div>
  )
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.doSignIn({...this.state})
    this.props.history.push('/');
  }

  render() {
    const { email, password, error, } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  // isAuthenticated: !!state.auth.uid
  password: state.password
});

const mapDispatchToProps = (dispatch) => {
  return { doSignIn: (email, password) => dispatch(doSignIn(email, password)) }
}



export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

// export default withRouter(SignIn);

export {
  SignInForm,
};