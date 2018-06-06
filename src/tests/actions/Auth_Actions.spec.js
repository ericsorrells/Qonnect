// ========================================================================================
import configureStore from 'redux-mock-store';
import {
  startSignIn,
  startSignOut,
  signIn,
  signOut,
  endSignIn,
  endSignOut
} from '../../actions/Auth';
// ========================================================================================

describe('Auth Actions', () => {
  it('startSignIn()', () => {
    const action = startSignIn('123')
    expect(action).toEqual({
      type: 'START_SIGN_IN',
      authInfo: '123'
    })
  });

  it('startSignOut()', () => {
    const action = startSignOut('123')
    expect(action).toEqual({
      type: 'START_SIGN_OUT'
    })
  });

  it('signIn()', () => {
    const action = signIn('123')
    expect(action).toEqual({
      type: 'SIGN_IN',
      uid: '123'
    })
  });

  it('signOut()', () => {
    const action = signOut('123')
    expect(action).toEqual({
      type: 'SIGN_OUT'
    })
  });

  it('endSignIn()', () => {
    const action = endSignIn('123')
    expect(action).toEqual({
      type: 'END_SIGN_IN'
    })
  });

  it('endSignOut()', () => {
    const action = endSignOut('123')
    expect(action).toEqual({
      type: 'END_SIGN_OUT'
    })
  });
});
