
// ========================================================================================
import { select, take, call, put } from 'redux-saga/effects'
import { signOut, endSignOut } from '../actions/Auth';
import { signOutOfFirebase } from '../firebase/helpers/authFirebase';
import { history } from '../router/AppRouter.js';
// ========================================================================================

function* signOutSaga() {
	yield take('START_SIGN_OUT');
	yield call(signOutOfFirebase);
	yield put(signOut());
	yield history.push('/');
	yield put(endSignOut());
}

export default signOutSaga;