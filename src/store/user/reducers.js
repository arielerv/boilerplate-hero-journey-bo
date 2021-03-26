import { createReducer } from 'reduxsauce';
import { userTypes } from 'store/user/actions';
import { initialState } from 'store/user/initial-state';

const setThemeRequest = state => ({
  ...state,
  isLoading: true,
});

const setThemeSuccess = (state, { theme }) => ({
  ...state,
  theme,
  isLoading: initialState.isLoading,
});

const getThemeRequest = state => ({
  ...state,
  isLoading: true,
});

const getThemeSuccess = (state, { theme }) => ({
  ...state,
  theme,
  isLoading: initialState.isLoading,
});

const reducer = createReducer(initialState, {
  [userTypes.USER_SET_THEME_REQUEST]: setThemeRequest,
  [userTypes.USER_SET_THEME_SUCCESS]: setThemeSuccess,

  [userTypes.USER_GET_THEME_REQUEST]: getThemeRequest,
  [userTypes.USER_GET_THEME_SUCCESS]: getThemeSuccess,
});

export default reducer;
