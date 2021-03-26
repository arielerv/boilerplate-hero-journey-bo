import { createReducer } from 'reduxsauce';
import { statusTypes } from 'store/status/actions';
import { initialState } from 'store/status/initial-state';

const request = state => ({
  ...state,
  isLoading: true,
  error: initialState.error,
});

const success = (state, { data }) => ({
  ...state,
  data,
  isLoading: initialState.isLoading,
  error: initialState.error,
});

const failure = (state, { error }) => ({
  ...state,
  error,
  isLoading: initialState.isLoading,
});

const reducer = createReducer(initialState, {
  [statusTypes.STATUS_REQUEST]: request,
  [statusTypes.STATUS_SUCCESS]: success,
  [statusTypes.STATUS_ERROR]: failure,
});

export default reducer;
