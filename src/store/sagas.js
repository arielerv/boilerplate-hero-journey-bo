import { all } from 'redux-saga/effects';
import { authSaga } from 'store/auth/saga';
import { statusSaga } from 'store/status/saga';
import { userSaga } from 'store/user/saga';

export default function* rootSaga() {
  yield all([authSaga(), statusSaga(), userSaga()]);
}
