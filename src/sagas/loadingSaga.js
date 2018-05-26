// ========================================================================================
import { select, take, call, put } from 'redux-saga/effects';
import { startLoading, endLoading } from '../actions/Loading_Actions';
// ========================================================================================

function* startLoadingSaga() {
	yield put(startLoading())
}

function* endLoadingSaga() {
	yield put(endLoading())
}

export { startLoadingSaga, endLoadingSaga };