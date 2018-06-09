// ========================================================================================
import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { startLoadingSaga, endLoadingSaga } from '../../sagas/loadingSaga';
import { startLoading, endLoading }     from '../../actions/Loading_Actions';
// ========================================================================================

describe('LoadingSagas', () => {
  it('startLoadingSaga*', () => {
    return expectSaga(startLoadingSaga)
    .put(startLoading())
    .run();
  });

  it('endLoadingSaga*', () => {
    return expectSaga(endLoadingSaga)
    .put(endLoading())
    .run();
  });
});

