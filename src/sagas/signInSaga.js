// ========================================================================================
import { select, take, call, put } from 'redux-saga/effects'
import { endSignIn, signIn } from '../actions/Auth';
import { doSignIn } from '../firebase/helpers/authFirebase';
import { history } from '../router/AppRouter.js';
// ========================================================================================

function* signInSaga() {
  const signInData = yield take('START_SIGN_IN')
  const { email, password, error } = signInData.authInfo;
  const user = yield call(doSignIn, email, password, error);
  const signInResult = yield call(signIn, user.uid);
  yield history.push('/profile/${signInResult.uid}');
  yield put(endSignIn())
}

export default signInSaga;